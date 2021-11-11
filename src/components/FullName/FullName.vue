<template>
  <v-row>
    <v-text-field
      v-model="surname"
      :rules="surnameRules"
      label="Фамилия"
      id="surname"
      required
      class="mr-4"
    ></v-text-field>

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Имя"
      id="name"
      required
      class="mr-4"
    ></v-text-field>

    <v-text-field
      v-model="patronymic"
      id="patronymic"
      :rules="patronymicRules"
      label="Отчество"
      required
    ></v-text-field>
  </v-row>
</template>

<script>
import { regxCirillicLetter } from "../../constants/regularExpression";

export default {
  name: "FullName",
  data() {
    return {
      surname: "",
      surnameRules: [
        (v) => !!v || "Введите фамилию",
        (v) => this.validateCirillic(v),
      ],
      name: "",
      nameRules: [(v) => !!v || "Введите имя", (v) => this.validateCirillic(v)],
      patronymic: "",
      patronymicRules: [
        (v) => !!v || "Введите отчество",
        (v) => this.validateCirillic(v),
      ],
    };
  },
  methods: {
    validateCirillic(v) {
      return regxCirillicLetter.test(v) || "используйте кириллицу";
    },
  },
};
</script>
