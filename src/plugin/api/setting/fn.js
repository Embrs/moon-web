// Object 轉換為 query
const ToQuerystr = (obj) => {
  if (!obj) return "";
  return `?${Object.entries(obj)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&")}`;
};

/**
 * 轉換為FormData格式
 * @param { Object } Params
 */
const ToFormData = (Params) => {
  const data = new FormData();
  Object.keys(Params).forEach((key) => {
    if (isArray(Params[key])) {
      if (Params[key].length !== 0)
        Params[key].forEach((v) => data.append(key, v));
    } else data.append(key, Params[key]);
  });
  return data;
};

/**
 * 是否為 Array
 * @param { Array } arr
 * @returns { Boolean }
 */
const isArray =
  Array.isArray ||
  function (arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  };

export default {
  ToQuerystr,
  ToFormData
};
