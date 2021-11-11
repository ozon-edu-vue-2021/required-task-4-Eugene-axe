<template>
  <v-row class="d-flex">
    <v-text-field
      ref="citizenshipFieldText"
      v-model="citizenshipTitle"
      id="citizenship"
      :rules="citizenshipTitleRules"
      label="Гражданство"
      class="flex-grow-1 align-self-start citizenship-textfield"
      @keyup="throttleFilteredList"
      @keyup.enter="emitCitizenshipTitle()"
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
import throttle from "../../../helpers/throttle";

export default {
  name: "Citizenship",
  data() {
    return {
      citizenshipTitle: "",
      citizenshipTitleRules: [
        (v) => !!v || "Нужно указать гражданство",
        (v) =>
          this.validCitizenshipTitle(v) ||
          "Вашего гражданства в списках не существует",
      ],
      citizenships: [],
      citizenshipsList: [],
      isShowListItem: false,
      throttleFilteredList: null,
    };
  },
  created() {
    this.nationalitySort(citizenships);
    this.citizenships = citizenships;
    this.citizenshipsList = this.citizenships;
    this.throttleFilteredList = throttle(this.filteredCitizenshipsList, 1000);
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
    filteredCitizenshipsList() {
      this.citizenshipsList = this.citizenships.filter((item) => {
        return item.nationality
          .toLowerCase()
          .includes(this.citizenshipTitle.toLowerCase());
      });
    },
    includeField() {
      return [document.querySelector(".citizenship-textfield")];
    },
    emitCitizenshipTitle() {
      let title = this.capitalize(this.citizenshipTitle);
      this.$emit(
        "citizenshipTitle",
        this.validCitizenshipTitle(title) ? title : false
      );
      this.citizenshipTitle = title;
    },
    handleClickListItem(citizenship) {
      this.citizenshipTitle = citizenship.nationality;
      this.isShowListItem = false;
      this.emitCitizenshipTitle();
      this.$refs.citizenshipFieldText.focus();
    },
    capitalize(text) {
      return text
        .split(" ")
        .map((word) => {
          if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          }
          return "";
        })
        .join(" ");
    },
    validCitizenshipTitle(citizenshipTitle) {
      return !!citizenships.find(
        (item) =>
          item.nationality.toLowerCase() === citizenshipTitle.toLowerCase()
      );
    },
    handlerOutsideClickList() {
      this.isShowListItem = false;
    },
  }, //end methods
};
</script>
