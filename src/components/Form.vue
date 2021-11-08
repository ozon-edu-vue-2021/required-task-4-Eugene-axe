<template class="tttttt">
  <v-form ref="form" v-model="valid" class="mx-auto">
    <FullName />
    <Birthday />
    <Email />
    <Gender />
    <Pasport />

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>

<script>
import FullName from "./FullName/FullName.vue";
import Birthday from "./Birthday/Birthday.vue";
import Email from "./Email/Email.vue";
import Gender from "./Gender/Gender.vue";
import Pasport from "./Pasport/Pasport.vue";

export default {
  data: () => ({
    valid: true,
    checkbox: false,
  }),
  components: {
    FullName,
    Birthday,
    Email,
    Gender,
    Pasport,
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.form {
}
</style>
