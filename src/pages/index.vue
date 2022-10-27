<script setup>
// 首頁 📄
import Carousel from "@/components/pages/home/Carousel.vue";
import { reactive, ref} from "vue";
// Tab 選項列表
const tabList = reactive([
  {key: 1, label: "ALL"},
  {key: 2, label: "校內揪揪"},
  {key: 3, label: "課外讀物"},
  {key: 4, label: "其他休閒"},
]);

// 目前選擇的 Tab
const currentTabKey = ref(1);

// 選擇 Tab 項目
const OnSelectTabItem = (key) => {
  currentTabKey.value = key;
};
</script>

<template lang="pug">
#Homoe
  //- 跑馬燈
  .carousel-area
    Carousel
  .check-box-area
    aCheckbox {{"Toggle animation"}}
  //- 篩選條
  .filter-area
    .tab-bar
      .tab-item(
        v-for="tabItem of tabList" :key="tabItem.key"
        :class="{'is-select': tabItem.key === currentTabKey}"
        @click.prevent="OnSelectTabItem(tabItem.key)"
      ) {{tabItem.label}}
  //- 圖片成列
  .img-list-area
    .img-item(v-for="i of 10" :key="i")
</template>

<style lang="scss" scoped>
#Homoe {
  .check-box-area {
    display: flex;
    justify-content: center;
    user-select: none;
    padding-bottom: 40px;
    .ant-checkbox-wrapper {
      color: #fd7e14;
      
    }
  }
  .filter-area {
    display: flex;
    justify-content: center;
  }
   .img-list-area {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    .img-item {
      width: 300px;
      height: 400px;
      background: #999;
    }
   }
}
.tab-bar {
  padding: 15px 20px;
  margin: 0 20px;
  border-radius: 15px;
  background-color: #fd7e14;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  .tab-item {
    padding: 10px 20px 10px 22px;
    border-radius: 100px;
    font-size: 20px;
    letter-spacing: 2px;
    color: #000;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.4s, color 0.4s;
  }
  .is-select {
    background-color: #000;
    color: #fff;
  }
}
</style>