<template>
  <v-form ref="form" v-model="valid" class="mx-auto mt-10">
    <div class="text-h4">Личные данные</div>
    <FullName />
    <Birthday />
    <Email />
    <Gender />
    <Pasport />
    <ChangeFullName />

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>
  </v-form>
</template>

<script>
import FullName from "./FullName/FullName.vue";
import Birthday from "./Birthday/Birthday.vue";
import Email from "./Email/Email.vue";
import Gender from "./Gender/Gender.vue";
import Pasport from "./Pasport/Pasport.vue";
import ChangeFullName from "./ChangeFullName/ChangeFullName.vue";

export default {
  data: () => ({
    valid: false,
  }),
  components: {
    FullName,
    Birthday,
    Email,
    Gender,
    Pasport,
    ChangeFullName,
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
