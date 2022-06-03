const articleRequest = axios.create({
    baseUrl: 'http://api/article/'
})

export const getArticleItem = () => articleRequest.get('/A')