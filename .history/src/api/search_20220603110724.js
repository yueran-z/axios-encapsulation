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
})