<template>
  <v-row no-gutters>
    <v-text-field
      v-model.lazy="email"
      :rules="emailRules"
      label="E-mail"
      :validate-on-blur="true"
      required
    ></v-text-field
  ></v-row>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {
      email: "",
      isFocus: false,
      emailRules: [
        (v) => !!v || "E-mail необходим",
        (v) => /.+@.+\..+/.test(v) || "E-mail не валидный",
      ],
    };
  },
};
</script>
