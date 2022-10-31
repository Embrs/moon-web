<script setup>
// Tab 歷史紀錄 📄
</script>

<template lang="pug">
#TabHistory
  //- 揪團資料
  .group-data
    .data-card
      p {{"揪團資料"}}
  //- 檢舉內容
  .complaint-data
    p {{"檢舉"}}
    .content {{"放檢舉內容"}}
</template>

<style lang="scss" scoped>
#TabHistory {
  border-radius: 10px;
  border: 1px solid #666;
  overflow: hidden;
  .group-data {
    padding: 20px 30px;
    border-bottom: 1px solid #666;
    .data-card {
      height: 150px;
      padding: 20px;
      font-size: 20px;
      border-radius: 10px;
      border: 1px solid #666;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #d6d8c4;
    }
  }
  .complaint-data {
    padding: 20px;
    font-size: 20px;
    letter-spacing: 2px;
    .title {}
    .content {
      padding: 40px 0;
      text-align: center;
    }
  }
}
</style>