<script setup>
// Tab å¸¸è¦åé¡ Q & A ð
</script>

<template lang="pug">
#TabQA
  .header-area
    p {{"å¸¸è¦åé¡ Q & A"}}
  .content-area
    pre.bottom-gap {{"ç³è«å¥é§"}}
    pre {{"1.å¦ä½ç³è¯·å¥é§"}}
    pre.bottom-gap.left-gap {{"ç³è«å¥é§å·²ç¶å¨é¢éæ¾å¦ï¼APPåé»è¦ç«¯é½å¯ä»¥å¥é§äºåï½"}}
    pre {{"2.ç³è«å¥é§å°é·åªè½ç³è«ä¸é å?"}}
    pre.bottom-gap.left-gap {{"ç³è«å¥é§éç¨ä¸­ï¼å¯ä»¥ç³è«ä¸é æè½ï¼å¥é§æåå¾ç®åéæ¾çç±éå°é·\né½å¯ä»¥ç³è«å¦ï¼å¾çºéæéæ¾æ´å¤æè½ï¼æ¬è«æå¾!"}}
    pre {{"3.å¥é§å¯©æ ¸éè¦å¤ä¹ï¼"}}
    pre.bottom-gap.left-gap {{"å·¥ä½æ¥24å°æå§æå¯©æ ¸å®ç¢åã!"}}
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