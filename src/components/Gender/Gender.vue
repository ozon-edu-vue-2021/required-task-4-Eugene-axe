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
      <v-radio label="Мужской" value="male"></v-radio>
      <v-radio label="Женский" value="female"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  name: "Gender",
  data() {
    return {
      gender: null,
      genderRules: [(v) => (v === null ? "Выберите одно из полей" : true)],
    };
  },
};
</script>
