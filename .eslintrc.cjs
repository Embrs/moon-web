/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:vue-pug/vue3-recommended",
    "eslint:recommended"
  ],
  rules: {
    "dot-notation": "off", // Object 不強制用 "."
    "no-console": "off", // 可以使用 console
    quotes: ["error", "double"], // 使用雙引號
    "semi-style": ["error", "last"], // 强制分号出现在句子末尾。
    "no-extra-semi": "error", // 禁用不必要的分号。
    semi: ["error", "always"], // 強制使用分號
    "no-empty-function": "error", // 禁止空function
    "no-unused-labels": "error",
    "no-alert": "off", // alert、confirm 和 prompt 禁止使用
    "arrow-parens": ["error", "always"], // ()=>箭頭
    curly: "off", // 可用return 簡寫
    "vue/no-mutating-props": "off", // change props
    "vue/multi-word-component-names": "off" // 多單字的名字
  }
};
