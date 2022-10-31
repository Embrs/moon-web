<script setup>
// 揪起來 📄
import { ref, reactive} from "vue";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons-vue";
//- 佈局頁面
// 揪團資訊
const currentSetp = ref(1);
const shopParams = reactive({
  title: "",
  description: "",
  type: "",
  endTime: ""
});
// 完成第一步
const OnSetp1Finish = () => {
  console.log("Step1 Finish");
  currentSetp.value = 2;
};
// 返回修改
const GoBackStep = () => {
  currentSetp.value = 1;
};
// 確定開團
const ToOpenGroup = () => {
  // TODO API
  currentSetp.value = 1;
  // init
  shopParams.title = "";
  shopParams.description = "",
  shopParams.type = "";
  shopParams.endTime ="";
};
</script>

<template lang="pug">
#Shop
  .shop-area
    //- Step1 -----------------------------------------------------------------------------------
    .step-item(v-show="currentSetp === 1")
      aForm(
        :model="shopParams"
        name="step1Form"
        hideRequiredMark
        @finish="OnSetp1Finish"
      )
        .main {{"開啟揪團"}}
        .step1-area
          .step1-left
            p {{"主題"}}
            aFormItem(
              name="title"
              :rules="[{ required: true, message: 'Please input title!' }]"
            )
              aInput( v-model:value="shopParams.title" placeholder="輸入揪團主題")
            p {{"說明"}}
            aFormItem(
              name="description"
              :rules="[{ required: true, message: 'Please input description!' }]"
            )
              aInput( v-model:value="shopParams.description" placeholder="輸入揪團介紹")
          .step1-right
            img(alt="avatar" class="logo" src="@/assets/images/avatar.jpg")
          .step1-bottom
            aFormItem(
              name="type"
              label="揪團類型"
              :rules="[{ required: true, message: 'Please select type!' }]"
            )
              aSelect(v-model:value="shopParams.type" placeholder="請選擇")
                aSelectOption(v-for="i of ['團長','團員']" :key="i" :value="`${i}`") {{i}}
            aFormItem(
              name="endTime"
              label="結束時間"
              :rules="[{ required: true, message: 'Please select type!' }]"
            )
              aDatePicker(
                v-model:value="shopParams.endTime"
                value-format="YYYY/MM/DD"
                format="YYYY年MM月DD日"
              )
            .btn-area
              aFormItem
                aButton(type="primary" size="large" html-type="submit") {{"Next"}}
    //- Step2 -----------------------------------------------------------------------------------
    .step-item(v-show="currentSetp === 2")
      .main {{"揪團確認"}}
      .step2-area
        .text-area
          .title {{shopParams.title}}
          .description {{shopParams.description}}
        .type-time-area
          .row-item
            .icon 
              UserOutlined
            .label {{shopParams.type}}
          .row-item
            .icon
              CalendarOutlined
            .label {{"收單日"}}
            .value  {{shopParams.endTime}}
        .btn-area
          aButton(type="primary" size="large" @click="GoBackStep") {{"返回修改"}}
          aButton( size="large" @click="ToOpenGroup") {{"確定開團"}}
</template>

<style lang="scss" scoped>
#Shop {
  display: grid;
  grid-template-columns: minmax(20px,auto) minmax(auto, 600px) minmax(20px,auto);
  grid-template-areas: ". shop .";
  .shop-area {
    grid-area: shop;
    .step-item {
      .main {
        font-size: 24px;
        letter-spacing: 2px;
        text-align: center;
        padding: 20px 0;
      }
      .step1-area {
        display: grid;
        grid-template-columns: 1fr 250px;
        grid-template-rows: auto auto;
        grid-template-areas:
          "left right"
          "bottom bottom";
        gap: 20px;
        .step1-left {
          grid-area: left;
        }  
        .step1-right {
          grid-area: right;
          display: flex;
          justify-content: flex-end;
          img {
            width: 200px;
            height: 200px
          }
        }
        .step1-bottom {
          border-top: 2px solid #aaa;
          padding-top: 20px;
          grid-area: bottom;
          .ant-picker {
            width: 100%;
          }
          .btn-area {
            border-top: 2px solid #aaa;
            padding-top: 20px;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
      .step2-area {
        .text-area {
          display: flex;
          gap: 20px;
          padding: 20px 0;
          border-top: 2px solid #aaa;
          border-bottom: 2px solid #aaa;
          .title {
            font-size: 24px;
            letter-spacing: 2px;
          }
          .description {
            font-size: 20px;
            letter-spacing: 2px;
            color: #666;
          }
        }
        .type-time-area {
          padding: 20px 0;
          border-bottom: 2px solid #aaa;
          .row-item {
            display: flex;
            align-items: center;
            gap: 10px;
            .icon {
              font-size: 20px;
            }
            .label {
              font-size: 20px;
              letter-spacing: 2px;
            }
            .value {
              font-size: 18px;
              letter-spacing: 2px;
            }
          }
        }
        .btn-area {
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>