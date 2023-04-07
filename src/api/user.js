import request from "./request";
/**
 * user 类中有登录、注册、获取用户信息等方法
 */

export default class User {
  /**
   * 登录模块
   * @param {用户登录数据} data
   * @returns
   */
  login(data) {
    return request({
      method: "post",
      url: "/login",
      data: data,
    });
  }

  /**
   * 注册模块
   */
  register(data) {
    return request({
      method: "post",
      url: "/register",
      data: data,
    });
  }

  /**
   * 获取用户信息模块
   */
  getUserInfo(data) {
    return request({
      method: "get",
      url: "/login",
      params: data,
    });
  }
}
