<template>
  <v-container>
    <v-text-field
      v-model="date"
      :rules="dateRules"
      label="Дата выдачи"
      placeholder="дд.мм.гггг"
      class="datefield"
      @click="showDatePicker"
      required
    ></v-text-field>
    <v-date-picker
      v-model="datePicker"
      v-if="isDatePickerShow"
      v-click-outside="{
        handler: showDatePicker,
        include: includeDateField,
      }"
    ></v-date-picker>
  </v-container>
</template>

<script>
import Birthday from "../Birthday/Birthday.vue";
export default {
  name: "PasportDate",
  mixins: [Birthday],
};
</script>
