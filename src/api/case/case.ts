import http from "../request";

export const getCaseList = (params: object) => {
    return http.get("/case", params);
}