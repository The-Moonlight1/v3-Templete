import request from "./request";

/**
 * case 模块
 */

export default class Case {
  /**
   *
   */
  wuhu(data) {
    return request({
      method: "post",
      url: "/wuhu",
      data: data,
    });
  }
}
