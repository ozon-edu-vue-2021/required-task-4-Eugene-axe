<template>
  <v-container>
    <div class="text-h6">Паспортные данные</div>
    <Citizenship @citizenshipTitle="hadleCitizen($event)" />
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
      citizenTitle: "",
    };
  },
  components: {
    Citizenship,
    RuPasportData,
    InternationalPasport,
  },
  methods: {
    hadleCitizen(value) {
      this.citizenTitle = value;
    },
  },
  computed: {
    isRussian() {
      return this.citizenTitle === RUSSIA;
    },
    isInternational() {
      return !!this.citizenTitle && this.citizenTitle !== RUSSIA;
    },
  },
};
</script>
