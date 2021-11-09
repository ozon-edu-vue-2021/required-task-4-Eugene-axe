<template>
  <v-container>
    <v-row class="flex-nowrap">
      <v-text-field
        v-model="surname"
        :rules="surnameRules"
        label="Фамилия на латнице"
        required
        class="mr-4"
      ></v-text-field>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Имя на латнице"
        required
      ></v-text-field>
    </v-row>
    <v-subheader
      >Иностранцы заполняют латинскими буквами. Прим. : Ivanov Ivan</v-subheader
    >
    <v-row class="flex-nowrap">
      <v-container>
        <v-text-field
          v-model="pasNumber"
          label="Номер паспорта"
          required
          class="mr-4"
        ></v-text-field>
      </v-container>

      <v-container class="country-off-issue">
        <v-text-field
          label="Страна выдачи"
          v-model="countryName"
          @click="isShowList = true"
          @keydown="trottleFilteredList()"
          class="country-name"
        ></v-text-field>
        <v-list
          max-height="200px"
          class="overflow-y-auto"
          v-if="isShowList"
          v-click-outside="{
            handler: () => (isShowList = false),
            include: includeCountryName,
          }"
        >
          <v-list-item
            v-for="citizenship in filterListCitizenships"
            :key="citizenship.uid"
            @click="handleListCitizenship(citizenship)"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="citizenship.nationality"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
      <v-container>
        <v-select
          :items="passportTypesOnlyTypes"
          label="Тип паспорта"
        ></v-select>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import citizenships from "../../../assets/data/citizenships.json";
import passportTypes from "../../../assets/data/passport-types.json";
import throttle from "lodash.throttle";

export default {
  name: "InternationalPasport",
  data() {
    return {
      name: "",
      nameRules: [
        (v) => !!v || "Введите имя",
        (v) => /^[a-z]+$/iu.test(v) || "Только латинские буквы",
      ],
      surname: "",
      surnameRules: [
        (v) => !!v || "Введите фамилию",
        (v) => /^[a-z]+$/iu.test(v) || "Только латинские буквы",
      ],
      pasNumber: "",
      citizenships: [],
      filterListCitizenships: [],
      passportTypes: [],
      countryName: "",
      isShowList: false,
    };
  }, //end data
  created() {
    this.citizenships = citizenships;
    this.passportTypes = passportTypes;
    this.filterListCitizenships = this.citizenships;
  },
  computed: {
    passportTypesOnlyTypes() {
      return this.passportTypes.map((item) => item.type);
    },
  },
  methods: {
    handleListCitizenship(value) {
      this.countryName = value.nationality;
      this.isShowList = false;
    },
    includeCountryName() {
      return [document.querySelector(".country-name")];
    },
    filteredListCitizenships() {
      this.filterListCitizenships = this.citizenships.filter((item) =>
        item.nationality.toLowerCase().includes(this.countryName.toLowerCase())
      );
    },
    trottleFilteredList: throttle(function () {
      this.filteredListCitizenships();
    }, 1000),
  }, // end methods
};
</script>
