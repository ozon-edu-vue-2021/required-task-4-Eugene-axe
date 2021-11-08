<template>
  <v-row no-gutters>
    <v-text-field
      v-model="surname"
      :rules="surnameRules"
      label="Фамилия"
      required
      class="mr-4"
    ></v-text-field>

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Имя"
      required
      class="mr-4"
    ></v-text-field>

    <v-text-field
      v-model="patronymic"
      :rules="patronymicRules"
      label="Отчество"
      required
    ></v-text-field>
  </v-row>
</template>

<script>
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
      return /^[а-яё0-9]+$/iu.test(v) || "используйте кириллицу";
    },
  },
};
</script>
