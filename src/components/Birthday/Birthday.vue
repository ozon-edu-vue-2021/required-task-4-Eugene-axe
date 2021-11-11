<template>
  <v-row class="col-6">
    <v-text-field
      v-model="date"
      id="birthday"
      :rules="dateRules"
      label="Дата рождения"
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
  </v-row>
</template>

<script>
import { format } from "date-fns";
import { REGX_DATE } from '../../constants/regularExpression'
export default {
  name: "Birthday",
  data() {
    return {
      date: "",
      datePicker: "",
      dateRules: [(v) => this.dateValidation(v)],
      isDatePickerShow: false,
    };
  },
  methods: {
    includeDateField() {
      return [document.querySelector(".datefield")];
    },
    showDatePicker() {
      this.isDatePickerShow = !this.isDatePickerShow;
    },
    dateValidation(v) {
      if (REGX_DATE.test(v)) {
        let [date, month, year] = v.split(".");
        if (
          new Date().getTime() - new Date(year, month - 1, date).getTime() >
          0
        ) {
          if (0 < date && date <= 31) {
            if (0 < month && month <= 12) {
              if (1990 < year && year <= new Date().getFullYear()) {
                return true;
              } else {
                return "Некорректно введен год : " + year;
              }
            } else {
              return "Некорректно указан месяц : " + month;
            }
          } else {
            return "Некорректное число : " + date;
          }
        } else {
          return "Путешественник из будущего?";
        }
      }
      return false;
    },
  }, //end methods
  watch: {
    datePicker: function () {
      if (this.datePicker) {
        let [year, month, day] = this.datePicker.split("-");
        this.date = format(new Date(year, month - 1, day), "dd.MM.yyyy");
      }
    },
  },
};
</script>
