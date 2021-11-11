<template>
  <v-row no-gutters>
    <v-text-field
      v-model="email"
      id="email"
      :rules="emailRules"
      label="E-mail"
      validate-on-blur
      required
    ></v-text-field
  ></v-row>
</template>

<script>
import { REGX_EMAIL } from "../../constants/regularExpression";

export default {
  name: "Email",
  data() {
    return {
      email: "",
      isFocus: false,
      emailRules: [
        (v) => !!v || "E-mail необходим",
        (v) => REGX_EMAIL.test(v) || "E-mail не валидный",
      ],
    };
  },
};
</script>
