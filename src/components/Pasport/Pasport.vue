<template>
  <v-container>
    <div class="text-h6">Паспортные данные</div>
    <Citizenship @citizenshipId="handleCitizen" />
    <RuPasportData v-if="isRussian" />
    <InternationalPasport v-if="isInternational" />
  </v-container>
</template>
t
<script>
import Citizenship from "./Citizenship/Citizenship.vue";
import RuPasportData from "./RuPasportData/RuPasportData.vue";
import InternationalPasport from "./InternationalPasportData/InternationalPasportData.vue";
import { RUSSIA } from "../../constants/citizenships";

export default {
  name: "Pasport",
  data() {
    return {
      citizenId: "",
    };
  },
  components: {
    Citizenship,
    RuPasportData,
    InternationalPasport,
  },
  methods: {
    handleCitizen(value) {
      this.citizenId = value;
    },
  },
  computed: {
    isRussian() {
      return this.citizenId === RUSSIA;
    },
    isInternational() {
      return !!this.citizenId && this.citizenId !== RUSSIA;
    },
  },
};
</script>
