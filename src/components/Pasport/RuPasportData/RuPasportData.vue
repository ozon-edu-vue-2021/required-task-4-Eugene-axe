<template>
  <v-container>
    <v-row class="align-baseline flex-nowrap">
      <v-container>
        <v-text-field
          v-model="series"
          id="rupas-series"
          :rules="seriesRules"
          label="Серия"
          required
          class="mr-4 flex-grow-1"
          validate-on-blur
        ></v-text-field>
      </v-container>

      <v-container>
        <v-text-field
          v-model="number"
          id="rupas-number"
          :rules="numberRules"
          label="Номер"
          required
          class="mr-4 flex-grow-1"
          validate-on-blur
        ></v-text-field>
      </v-container>
      <v-container>
        <PasportDate class="pasportdate flex-grow-1" />
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import PasportDate from "../PasportDate.vue";
export default {
  name: "RuPassportData",
  data() {
    return {
      series: "",
      seriesRules: [(v) => /^\d{4}$/.test(v) || "Должно быть 4 цифры"],
      number: "",
      numberRules: [(v) => /^\d{6}$/.test(v) || "Должно быть 6 цифр"],
    };
  },
  components: {
    PasportDate,
  },
};
</script>
