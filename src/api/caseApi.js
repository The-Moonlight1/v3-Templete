import request from "./request";

/**
 * case 模块
 */

/**
 * 在这里写具体的方法
 */
function wuhu(data) {
  return request({
    method: "post",
    url: "/wuhu",
    data: data,
  });
}
// 在这里导出
export default {
  wuhu
}
