<template>
  <v-row class="d-flex">
    <v-text-field
      v-model="citizenshipText"
      label="Гражданство"
      class="flex-grow-1 align-self-start citizenship-textfield"
      @keyup="throttleMethod()"
      @focus="isShowListItem = true"
      required
    ></v-text-field>
    <v-list
      max-height="300px"
      class="overflow-y-auto flex-grow-1"
      v-click-outside="{
        handler: () => (isShowListItem = false),
        include: includeField,
      }"
    >
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-subheader v-if="!isShowListItem" @click="isShowListItem = true">
          Список
        </v-subheader>
        <v-list-item
          v-for="citizenship in citizenshipsList"
          :key="citizenship.uid"
          v-show="isShowListItem"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="citizenship.nationality"
            ></v-list-item-title> </v-list-item-content
        ></v-list-item>
      </v-list-item-group>
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
  }, //end methods
  watch: {
    selectedItem() {
      this.citizenshipText =
        this.citizenshipsList[this.selectedItem].nationality;
    },
  },
};
</script>
