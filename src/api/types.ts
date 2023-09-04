// 错误类型
export interface ErrMessage {
    [key: string]: {
        message: string;
        duration: number;
        showClose: boolean;
    };
}

// 响应类型,后端返回数据的统一格式
export interface ResponseData<T> {
    code: number;
    data: T;
    message: string;
}