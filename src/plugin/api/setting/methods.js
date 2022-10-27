import axios from "axios";
import fn from "./fn";
import config from "./config";

// Get Store
const axiosIns = axios.create(config.basic);

// 回傳攔截
axiosIns.interceptors.response.use(
  (response) => HandleSuccessRes(response),
  (error) => HandleErrorRes(error)
);

// 回傳成功
const HandleSuccessRes = (response) => {
  console.log(response);
  // TODO 資料攔截處理
  return response.data;
};

// 回傳失敗
const HandleErrorRes = (error) => {
  console.log(error);
  // TODO 資料異常處理
  return error;
};

// ==============================================================================
/**
 * Get method
 * @param { string } uri
 * @param { Object } Params
 */
const Get = (uri, Params) => {

  return new Promise((resolve) => {
    axiosIns
      .get(`${uri}${fn.ToQuerystr(Params)}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => console.log("err", err));
  });
};

/**
 * Post method
 * @param { string } uri
 * @param { Object } Params
 */
const Post = (uri, Params) => {

  return new Promise((resolve) => {
    axiosIns
      .post(uri, JSON.stringify(Params))
      .then((response) => {
        resolve(response);
      })
      .catch((err) => console.log("err", err));
  });
};

/**
 * Put method
 * @param { string } uri
 * @param { Object } Params
 */
const Put = (uri, Params) => {
  return new Promise((resolve) => {
    axiosIns
      .put(uri, JSON.stringify(Params))
      .then((response) => {
        resolve(response);
      })
      .catch((err) => console.log("err", err));
  });
};

/**
 * Delete method
 * @param { string } uri
 * @param { Object } Params
 */
const Delete = (uri, Params) => {

  return new Promise((resolve) => {
    axiosIns
      .delete(uri + fn.ToQuerystr(Params))
      .then((response) => {
        resolve(response);
      })
      .catch((err) => console.log("err", err));
  });
};

export { Get, Post, Put, Delete };
