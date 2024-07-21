import axios from "axios";

export const fetchWeb = async (
    endPoint = "",
    method = "get",
    data = null,
    headers = {}
) => {
    const instance = axios.create({
        baseURL: "http://localhost:8715/api/web",
    });
    return await instance({
        url: endPoint,
        method,
        data,
        headers,
    });
};