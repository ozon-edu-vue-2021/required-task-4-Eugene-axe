<template>
  <v-row>
    <v-text-field
      v-model="citizenship"
      label="Гражданство"
      class="mr-6"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="citizenships"
      item-text="nationality"
      item-value="id"
      :hint="`${select.capital} , ${select.flag}`"
      :rules="[(v) => !!v || 'Item is required']"
      label="Гражданство"
      persistent-hint
      return-object
      single-line
      required
      ref="selectCitizen"
    ></v-select>
  </v-row>
</template>

<script>
import citizenships from "../../../assets/data/citizenships.json";

export default {
  name: "Citizenship",
  data() {
    return {
      citizenship: "",
      select: citizenships[0],
      citizenships: [],
    };
  },
  created() {
    this.citizenships = citizenships;
  },
};
</script>
