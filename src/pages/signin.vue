
<script setup>
// 登入頁面 📄
import { inject, reactive } from "vue";

// 登入資訊
const signInInfo = reactive({
  account: "",
  password: ""
});
// 提取API
const $api = inject("$api");
// api 處理
const ApiLogin = async () => {
  const data = await $api.Login(signInInfo);
  console.log(data);
};
</script>

<template lang="pug">
#SignIn
  pre {{signInInfo}}
  input(v-model="signInInfo.account")
  input(v-model="signInInfo.password")
  button(@click="ApiLogin") {{"Login"}}
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
