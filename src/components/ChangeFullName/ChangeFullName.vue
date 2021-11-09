<template>
  <v-container>
    <div class="text-h6">Меняли ли фамилию или имя?</div>
    <v-radio-group
      row
      v-model="isChange"
      required
      :rules="isChangeRules"
      id="isChangeName"
    >
      <v-radio label="Нет" :value="false"></v-radio>
      <v-radio label="Да" :value="true"></v-radio>
    </v-radio-group>

    <v-row v-if="isChange">
      <v-text-field
        label="Предыдущая фамилия"
        v-model="oldSurname"
        id="oldSurname"
        :rules="oldSurnameRules"
        class="mr-8"
      ></v-text-field>
      <v-text-field
        label="Предыдущее имя"
        id="oldName"
        v-model="oldName"
        :rules="oldNameRules"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChangeFullName",
  data() {
    return {
      isChange: null,
      isChangeRules: [(v) => (v === null ? "Выберите одно из полей" : true)],
      oldSurname: "",
      oldSurnameRules: [
        (v) => !!v || "Введите предыдущую фамилию",
        (v) => this.validateCirillic(v),
      ],
      oldName: "",
      oldNameRules: [
        (v) => !!v || "Введите предыдущее имя",
        (v) => this.validateCirillic(v),
      ],
    };
  },
  methods: {
    validateCirillic(v) {
      return /^[а-яё]+$/iu.test(v) || "используйте кириллицу";
    },
  },
};
</script>
