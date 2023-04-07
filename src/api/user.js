import request from "./request";

/**
 * user 类中有登录、注册、获取用户信息等方法
 */

/**
   * 登录模块
   * @param {用户登录数据} data
   * @returns
   */
function login(data) {
  return request({
    method: "post",
    url: "/login",
    data: data,
  });
}
/**
   * 获取用户信息模块
   */
function getUserInfo(data) {
  return request({
    method: "get",
    url: "/login",
    params: data,
  });
}

/**
   * 注册模块
   */
function register(data) {
  return request({
    method: "post",
    url: "/register",
    data: data,
  });
}
export default {
  login,
  register,
  getUserInfo
}
