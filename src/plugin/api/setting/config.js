// API 基礎結構
const basic = {
  method: "post",
  baseURL: "/api",
  transformRequest: [
    (data, headers) => {
      headers["Content-Type"] = "application/json";
      headers.Authorization = "";
      return data;
    }
  ],
  headers: {
    "Content-Type": "multipart/form-data"
  },
  // 攜帶憑證
  withCredentials: false,
  // 返回資料型別
  responseType: "json"
};
const config = {
  basic
};

export default config;
