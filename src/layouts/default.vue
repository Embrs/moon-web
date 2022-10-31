<script setup>
import { SettingOutlined, BellOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons-vue";
//- 佈局頁面
import { reactive } from "vue";
// 搜尋參數
const searchParams = reactive({
  searchKey: "",
  password: ""
});
// 查詢事件
const OnSearchBtn = () => {
  ApiSearchData();
};
// API 查詢資料
const ApiSearchData = () => {
  console.log(searchParams.searchKey);
  // TODO 執行 inject ＡＰＩ
};
</script>

<template lang="pug">
aBackTop
  .back-top {{"⌃"}}
#Layout
  //- 上面搜尋與分頁選項 --------------------
  .header-area
    .top-tool-area
      .logo-text {{"Jiu Ban"}}
      //- 查詢列
      .search-tool
        aInputSearch(
          v-model:value="searchParams.searchKey"
            placeholder="Search for Ban"
            style="width: 100%"
            size="large"
            @search="OnSearchBtn"
        )
      .ctrl-tool-area
        //- 齒輪
        RouterLink.icon-btn(to="/setting")
          SettingOutlined
        //- 鈴鐺
        aDropdown(:trigger="['click']")
          a.icon-btn(class="ant-dropdown-link" @click.prevent)
            BellOutlined
          template(#overlay)
            //- //TODO 選項連結
            aMenu
              aMenuItem
                RouterLink(to="/") {{"Action"}}
              aMenuItem
                RouterLink(to="/") {{"Anoter actoin"}}
              aMenuItem
                RouterLink(to="/") {{"Something else here"}}
              aMenu-divider
              aMenuItem(key="3")
                RouterLink(to="/") {{"Separated link"}}

        //- 對話框
        RouterLink.icon-btn(to="/")
          MessageOutlined
        //- 已登入會員
        RouterLink.icon-btn(to="/member")
          UserOutlined
        //- 登入
        RouterLink.icon-btn(to="/register")
          UserOutlined
    .page-tab-area
      .tab-item
        RouterLink(to="/shop") {{"揪起來"}}
      .mid-img-area
        img.img-item(alt="Vue logo" class="logo" src="@/assets/images/logo.png" width="250" )
      .tab-item
        RouterLink(to="/") {{"貼文牆"}} 
  //- 分頁 -------------------------------
  .pages-area
    RouterView(v-slot="{ Component }")
      transition(name="page" mode="out-in")
        component(:is="Component")

</template>

<style lang="scss" scoped>
#Layout {
  min-height: 100vh;
  .header-area {
    font-family: 'Dancing Script', cursive;
    background: #F48A3A;
    .top-tool-area {
      height: 80px;
      padding: 30px;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
      .logo-text {
        font-size: 46px;
        font-weight: bold;
      }
      .ctrl-tool-area {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }
    }
    
    .page-tab-area {
      // padding: 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      .tab-item {
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        a {
          color: #000;
        }
      }
      .mid-img-area {
        position: relative;
        display: flex;
        justify-content: center;
        .img-item {
          z-index: 1;
          transform: translateY(20px);
        }
        &::after {
          z-index: 0;
          content: " ";
          position: absolute;
          transform: scale(2, 0.9);
          bottom: -80px;
          width: 0;
          height: 0;
          border-top: 100px solid #F48A3A;
          // border-top: 100px solid #aaa;
          border-right: 100px solid transparent;
          border-bottom: 0px solid #f00;
          border-left: 100px solid transparent;
        }
      }
    }
  } 
  .pages-area {
    padding-top: 100px;
  }
}

.icon-btn {
  font-size: 24px;
  color: #fff;
  width: 50px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  border: 1px solid #0000;
  border-radius: 4px;
  transition: border 0.4s;
  &:hover {
    border: 1px solid #fff;
  }
}

.back-top {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #F48A3A;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  &:active {
    transform: scale(0.9);
  }
}
</style>
