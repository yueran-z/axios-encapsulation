import axios from "axios";

const domain = "https://bookshelf.goodideas-studio.com";
// 版次
// const apiVersion = 'v1';

const bookAPI = axios.create({
    baseURL: `${domain}/api`,
    // 加上板次
    // baseURL: `${domain}/api/${apiVersion}`,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

bookAPI.interceptors.request.use(
    function (config) {
        // do sth before request is sent

        // 会员系统需要认证身份时
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// add a response interceptor
bookAPI.interceptors.response.use(
    function (response) {
        // 任何HTTP status code为2XX开头时触发此函式
        return response
    },
    function (error) {
        // 任何HTTP status code为非 2XX开头时触发此函式
        return Promise.reject(error.response);
    }
)
async function GET(url, params) {
    try {
        const response = await bookAPI.get(url, params);
        return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
}
// 封裝其他請求方法如 POST、PUT...

export const getBookList = data => BookApi.get('/bookList', data);

export {
    GET,
    // POST,
    // PUT
};