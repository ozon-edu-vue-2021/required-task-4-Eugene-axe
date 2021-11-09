<template>
  <v-container>
    <p>Паспортные данные</p>
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
      return this.citizenTitle === "Russia";
    },
    isInternational() {
      return !!this.citizenTitle && this.citizenTitle !== "Russia";
    },
  },
};
</script>
