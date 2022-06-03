const searchRequest = axios.create({
    baseUrl: 'http://api/search/'
})

export const getSearch = data => searchRequest