<script setup>
// 會員 📄
import { ref, reactive } from "vue";
const menuSelect = ref("info"); // 個人資料：info, 我的貼文：posts, 揪團紀錄：hitory
const menuKeyValue = reactive({
  info: "個人資料",
  posts: "我的貼文",
  hitory: "揪團紀錄",
});
</script>

<template lang="pug">
#Member
  .member-area
    //- 左側
    .left-area
      //- 頭像
      .avatar-box
        img(alt="avatar" class="logo" src="@/assets/images/avatar.jpg")
      //- 選單
      .menu-box
        .menu-item(:class="{'menu-select': menuSelect ==='info'}" @click="menuSelect='info'") {{"個人資料"}}
        .menu-item(:class="{'menu-select': menuSelect ==='posts'}" @click="menuSelect='posts'")  {{"我的貼文"}}
        .menu-item(:class="{'menu-select': menuSelect ==='hitory'}" @click="menuSelect='hitory'")  {{"揪團紀錄"}}
    //- 右側
    .right-area
      .content-box
        .header-area
          p {{menuKeyValue[menuSelect]}}
        .body-area
          .info-item(v-if="menuSelect ==='info'")
            //- TODO
          .info-item(v-if="menuSelect ==='posts'")
            //- TODO
          .info-item(v-if="menuSelect ==='hitory'")
            //- TODO
</template>

<style lang="scss" scoped>
#Member {
  display: grid;
  grid-template-columns: minmax(20px,auto) minmax(auto, 1000px) minmax(20px,auto);
  grid-template-areas: ". member .";
  .member-area {
    grid-area: member;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 50px;
    .left-area {
      .avatar-box {
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        img {
          width: 200px;
          height: 200px;
          border-radius: 200px;
          box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
        }
      }
      .menu-box {
        border-radius: 5px;
        border: 1px solid #aaa;
        background-color: #EEE4CB;
        .menu-item {
          cursor: pointer;
          user-select: none;
          padding: 20px;
          text-align: center;
          font-size: 20px;
          &:hover {
            background-color: #ded4b9;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #aaa;
          }
        }
        .menu-select {
          color: #817961;
        }
      }
    }
    .right-area  {
      .content-box {
        border: 1px solid #aaa;
        border-radius: 10px;
        overflow: hidden;
        background-color: #FAEFC9;
        .header-area {
          padding: 10px;
          font-size: 20px;
          letter-spacing: 2px;
          text-align: center;
          border-bottom: 1px solid #aaa;
        }
        .body-area {
          padding: 20px;
          min-height: 500px;
        }
      }
    }
  }
}
</style>