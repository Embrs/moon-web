<script setup>
// è¨­å®é é¢ ð
import { ref } from "vue";
import TabQA from "@/components/pages/setting/TabQA.vue";
import TabHistory from "@/components/pages/setting/TabHistory.vue";
// ç®åé¸æç Tab
const currentTab = ref("qa"); // qa, history
</script>

<template lang="pug">
#Setting
  .tab-component
    .tab-header
      .tab-item(@click="currentTab='qa'") {{"QAåç­é"}}
      .tab-item(@click="currentTab='history'") {{"æ­·å²è¨é"}}
    .tab-content
      TabQA(v-if="currentTab==='qa'" key="qa")
      TabHistory(v-if="currentTab==='history'" key="history")

</template>

<style lang="scss" scoped>
#Setting {
  display: grid;
  grid-template-columns: minmax(20px,auto) minmax(auto, 800px) minmax(20px,auto);
  grid-template-areas: ". component .";
  .tab-component {
    grid-area: component;
    // background: #666;
    // padding: 20px;
    box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
    .tab-header {
      height: 60px;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column dense; // ç¨ å¯
      border-bottom: 1px solid #666;
      .tab-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        letter-spacing: 4px;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.4s ease;
        &:hover {
          background: #eee;
        }
      }
    }
    .tab-content {
      padding: 20px
    }
  }
}
</style>