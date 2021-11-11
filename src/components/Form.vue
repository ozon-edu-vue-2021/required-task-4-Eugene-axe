<template>
  <v-form ref="form" v-model="valid" class="mx-auto mt-10">
    <div class="text-h4">Личные данные</div>
    <FullName />
    <Birthday />
    <Email />
    <Gender />
    <Pasport />
    <ChangeFullName />
    <v-row>
      <v-btn @click="send" v-if="valid"> send </v-btn>
      <v-btn @click="validate" v-else> try send </v-btn>
      <v-alert v-if="valid" dense text type="success">
        Успешная валидация
      </v-alert>
    </v-row>
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
    send() {
      const sendData = this.$refs.form.inputs.reduce((acc, input) => {
        acc[input.id] = input.value;
        return acc;
      }, {});
      console.log(JSON.stringify(sendData));
      this.validate();
    },
  },
};
</script>
