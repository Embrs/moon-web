<script setup>
import { /*RouterLink,*/ RouterView } from "vue-router";
import { inject, reactive } from "vue";

// 登入資訊
const signInInfo = reactive({
  account: "",
  password: ""
});

const $api = inject("$api");
// api 處理
const ApiLogin = async () => {
  const data = await $api.Login(signInInfo);
  console.log(data);
};
</script>

<template lang="pug">
//- 網頁佈局
header
  //- img(alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125")
  //- div(class="wrapper")
  //-   HelloWorld(msg="You did it!")
  //-   nav
  //-     RouterLink(to="/") Home 
  //-     RouterLink(to="/about") About
  pre {{signInInfo}}
  input(v-model="signInInfo.account")
  input(v-model="signInInfo.password")
  button(@click="ApiLogin") {{"Login"}}
//- 分頁
RouterView
</template>

<style scoped>

</style>
