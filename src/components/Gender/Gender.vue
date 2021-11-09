<template>
  <v-container>
    <p>Пол</p>
    <v-radio-group
      v-model="gender"
      id="gender"
      :value="gender"
      :rules="genderRules"
      row
    >
      <v-radio label="Мужской" :value="genders.MALE"></v-radio>
      <v-radio label="Женский" :value="genders.FEMALE"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
import { MALE, FEMALE } from "../../constants/genders";

export default {
  name: "Gender",
  data() {
    return {
      gender: null,
      genderRules: [(v) => (v === null ? "Выберите одно из полей" : true)],
      genders: {
        MALE,
        FEMALE,
      },
    };
  },
};
</script>
