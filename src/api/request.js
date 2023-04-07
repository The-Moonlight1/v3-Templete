import axios from "axios";

const instance = axios.create({
  // 配置项目基本地址
  baseURL: "",
  // 配置项目延迟时间 2.5s
  timeout: 2500,
});

/**
 * 添加请求拦截器
 *  目的是为了    在每次请求之前做出一些事情
 * 例如 :
 *   1.向请求头中添加token
 *   2.处理特定请求时(文件上传等),添加请求头
 *   3.
 */
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

/**
 * 添加响应拦截器
 *  目的是为了      在服务器每次返回响应之前做出一些事情
 * 例如 :
 *   1.对错误进行统一处理
 *   2.直接返回服务器返回数据，不返回 axios 加工过后的数据
 *   3.
 */

const errMessage = {
  [401]: { message: "请您先登录~", duration: 2000, showClose: true },
  [403]: { message: "登录已过期,请重新登录", duration: 2000, showClose: true },
  [404]: { message: "您请求的资源不存在~", duration: 2000, showClose: true },
  [500]: { message: "服务器异常,请稍后再试~", duration: 2000, showClose: true },
  internetError: {
    message: "网络已断开，请查看你的网络连接~",
    duration: 2000,
    showClose: true,
  },
};
instance.interceptors.response.use(
  (res) => {
    return res.data; // 直接返回服务器返回结果
  },
  (err) => {
    // 对响应错误做点什么
    let { response } = error;
    if (response) {
      // 请求不成功但返回结果
      // 检查返回的错误码中是否含有以及配置的错误提示, 如果有 则跳出提示框
      Object.keys(errMessage).includes(response.status) &&
        Message.error(errMessage[response.status]);
    } else if (
      // 服务器完全没有返回结果（网络问题或服务器崩溃）
      response.code === "ECONNABORTED" ||
      response.message === "Network Error" ||
      response.message.includes("timeout") ||
      //window.navigator.onLine检测浏览器是否联网，联网返回true，未联网返回false
      !window.navigator.onLine
    ) {
      // 处理超时和断网
      Message.error(errMessage.internetError);
    } else {
      // 进行其他处理
      console.log(response.stack);
    }
    return Promise.reject(error);
  }
);

export default instance;
