<template>
  <v-row class="d-flex">
    <v-text-field
      ref="citizenshipFieldText"
      v-model="citizenshipText"
      :rules="citizenshipTextRules"
      label="Гражданство"
      class="flex-grow-1 align-self-start citizenship-textfield"
      @keyup="throttleMethod()"
      @keyup.enter="emitCitizen"
      @click="isShowListItem = true"
      required
      validate-on-blur
    ></v-text-field>

    <v-list
      max-height="200px"
      class="overflow-y-auto flex-grow-1"
      v-click-outside="{
        handler: handlerOutsideClickList,
        include: includeField,
      }"
    >
      <v-list-item
        v-for="citizenship in citizenshipsList"
        :key="citizenship.uid"
        v-show="isShowListItem"
        @click="handleClickListItem(citizenship)"
      >
        <v-list-item-content>
          <v-list-item-title
            v-text="citizenship.nationality"
          ></v-list-item-title> </v-list-item-content
      ></v-list-item>
    </v-list>
  </v-row>
</template>

<script>
import citizenships from "../../../assets/data/citizenships.json";
import throttle from "lodash.throttle";

export default {
  name: "Citizenship",
  data() {
    return {
      selectedItem: null,
      citizenshipText: "",
      citizenshipTextRules: [
        (v) => !!v || "Нужно указать гражданство",
        (v) =>
          !!this.validCitizenText(v) ||
          "Вашего гражданства в списках не существует",
      ],
      citizenships: [],
      citizenshipsList: [],
      isShowListItem: false,
    };
  },
  created() {
    this.nationalitySort(citizenships);
    this.citizenships = citizenships;
    this.citizenshipsList = this.citizenships;
  },
  methods: {
    nationalitySort(array) {
      array.sort((a, b) => {
        if (a.nationality > b.nationality) {
          return 1;
        }
        if (a.nationality < b.nationality) {
          return -1;
        }
        return 0;
      });
    },
    filteredCitizenships() {
      this.citizenshipsList = this.citizenships.filter((item) => {
        return item.nationality
          .toLowerCase()
          .includes(this.citizenshipText.toLowerCase());
      });
    },
    includeField() {
      return [document.querySelector(".citizenship-textfield")];
    },
    throttleMethod: throttle(function () {
      this.filteredCitizenships();
    }, 1000),
    emitCitizen() {
      this.$emit("isCitizenship", this.citizenshipText);
    },
    handleClickListItem(citizenship) {
      this.citizenshipText = citizenship.nationality;
      this.isShowListItem = false;
      this.$refs.citizenshipFieldText.focus();
    },
    capitalize(text) {
      let out = "";
      out = text
        .split(" ")
        .map((word) => {
          if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
          }
          return "";
        })
        .join(" ");
      return out;
    },
    validCitizenText(citizenshipText) {
      return citizenships.find(
        (item) =>
          item.nationality.toLowerCase() === citizenshipText.toLowerCase()
      );
    },
    handlerOutsideClickList() {
      this.isShowListItem = false;
    },
  }, //end methods
  watch: {
    citizenshipText: function () {
      if (this.citizenshipText !== this.capitalize(this.citizenshipText)) {
        this.citizenshipText = this.capitalize(this.citizenshipText);
      }
      if (this.validCitizenText(this.citizenshipText)) {
        this.$emit("titleCitizenship", this.citizenshipText);
      } else {
        this.$emit("titleCitizenship", false);
      }
    },
  },
};
</script>
