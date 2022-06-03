const articleRequest = axios.create({
    baseUrl: 'http://api/article/'
})

export const getArticleItem = () => articleRequest.get('/ArticleItem')
export const getArticleMsg = data => {articleRequest.post('/Article')}