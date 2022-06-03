const searchRequest = axios.create({
    baseUrl: 'http://api/search/'
})

export const getSearch = data => searchRequest.get(`/Search?searchdata=${data}`)
export const getSearchType = () => searchRequest.get(`/SearchType`)

//  拦截 API request 的请求
searchRequest.interceptors.request.use(request => {
//    API送出前可以做最后的处理
    request.headers['Authorization'] = 'Bearer ' + token;
    return request;
},error =>{
     // 如果送出前失败了，这边就可以做一些处理
    return Promise.reject(error);
});

// 拦截 API response 的回传
searchRequest.interceptors.response.use(response => {
    // 这边可以对回来的资料先进行验证处理，再来决定要不要把资料给吐出去
    return Promise.resolve(response);
}, error => {
    // 这边当API发生错误的时候就可以处理 Error handling
    return Promise.reject(error.response.data);
})
