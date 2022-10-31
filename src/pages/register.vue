
<script setup>
// 登入頁面 📄
import SignupCardFrom from "@/components/pages/register/SignupCardFrom.vue";
import LoginCardFrom from "@/components/pages/register/LoginCardFrom.vue";
import { ref } from "vue";

// 目前控制類型
const ctrlType = ref("login"); // signup, login
</script>

<template lang="pug">
#Register
  .content-area
    .content-box
      //- Signup
      .box-header {{"Don't have an account?"}}
      .box-text {{"Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap."}}
      button.box-button(@click="ctrlType='signup'") {{"SIGN UP"}}
    .content-box
      //- Login
      .box-header {{"Have an account?"}}
      .box-text {{"Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap."}}
      button.box-button(@click="ctrlType='login'") {{"LOGIN"}}
      //- 懸浮卡片
      .action-card(:class="{'card-singup-type': ctrlType === 'signup'}")
        .card-type(v-if="ctrlType === 'signup'")
          SignupCardFrom
        .card-type(v-if="ctrlType === 'login'")
          LoginCardFrom

</template>

<style lang="scss" scoped>
#Register {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  .content-area {
    width: 80%;
    background-color: #b58f63;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .content-box {
      position: relative;
      padding: 50px 45px;
      .box-header {
        font-family: 'Dancing Script', cursive;
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 10px;

      }
      .box-text {
        color: #fff;
        padding-bottom: 40px;
      }
      .box-button {
        font-size: 18px;
        padding: 5px 30px;
        letter-spacing: 4px;
        cursor: pointer;
        color: #fff;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: all 0.4s ease;
        &:hover {
          color: #000;
          background-color: #ccc;
        }
      }
      .action-card {
        position: absolute;
        background-color: #fff;
        left: 0;
        top: -5%;
        padding: 30px 30px 0 30px;
        border-radius: 3px;
        box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
        min-height: 110%;
        width: calc(100% - 30px);
        transition: transform 0.4s ease
      }
      .card-singup-type {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
