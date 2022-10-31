<script setup>
// Tab 常見問題 Q & A 📄
</script>

<template lang="pug">
#TabQA
  .header-area
    p {{"常見問題 Q & A"}}
  .content-area
    pre.bottom-gap {{"申請入駐"}}
    pre {{"1.如何申请入駐"}}
    pre.bottom-gap.left-gap {{"申請入駐已經全面開放啦，APP和電腦端都可以入駐了喔～"}}
    pre {{"2.申請入駐專長只能申請一項嗎?"}}
    pre.bottom-gap.left-gap {{"申請入駐過程中，可以申請一項技能，入駐成功後目前開放的熱門專長\n都可以申請哦，後續還會開放更多技能，敬請期待!"}}
    pre {{"3.入駐審核需要多久？"}}
    pre.bottom-gap.left-gap {{"工作日24小時內會審核完畢喔。!"}}
</template>

<style lang="scss" scoped>
#TabQA {
  border-radius: 10px;
  border: 1px solid #666;
  overflow: hidden;
  .header-area {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #666;
    background-color: #d6d8c4;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .content-area {
    padding: 20px 30px;
    font-size: 16px;
    letter-spacing: 2px;
    .bottom-gap {
      padding-bottom: 20px;
    }
    .left-gap  {
      padding-left: 23px;
    }

  }
}
</style>