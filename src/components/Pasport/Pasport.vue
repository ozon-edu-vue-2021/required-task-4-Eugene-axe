<template>
  <v-container>
    <p>Паспортные данные</p>
    <Citizenship />
  </v-container>
</template>

<script>
import Citizenship from './Citizenship/Citizenship.vue'
export default {
  name: "Passport",
  data() {
    return {
      citizenship: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    };
  },
  components: {
    Citizenship,
  },
  methods: {},
};
</script>
