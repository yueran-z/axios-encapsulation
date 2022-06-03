const searchRequest = axios.create({
    baseUrl: 'http://api/search/'
})

export const getSearch = data => searchRequest.get(`/Search?searchdata=${data}`)
export const getSearchType = () => searchRequest.get(`/SearchType`)

