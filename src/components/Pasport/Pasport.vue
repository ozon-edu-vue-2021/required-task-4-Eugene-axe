<template>
  <v-container>
    <p>Паспортные данные</p>
    <Citizenship @titleCitizenship="hadleCitizen($event)" />
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
      citizen: "",
    };
  },
  components: {
    Citizenship,
    RuPasportData,
    InternationalPasport,
  },
  methods: {
    hadleCitizen(value) {
      this.citizen = value;
    },
  },
  computed: {
    isRussian() {
      return this.citizen === "Russia";
    },
    isInternational() {
      return !!this.citizen && this.citizen !== "Russia";
    },
  },
};
</script>
