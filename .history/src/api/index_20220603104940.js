import {
    postUserLogin,
    postUserLogout,
    postUserSignUp
} from "./user.js"
import {
    getArticleItem,
    postArticleMsg,
    postArticleLink
} from "./article.js"
import {
    getSearch,
    getSearchType
} from "./search.js"

export const apiPostUserLogin = postUserLogin
export const apiPostUserLogout = postUserLogout
export const apiPostUserSignUp = postUserSignUp
export const apiGetArticleItem = getArticleItem
export const apiPostArticleMsg = postArticleMsg
export const apiPostArticleLink = postArticleLink
export const apiGetSearch = getSearch
export const apiGetSearchType = getSearchType

作者： yueran
链接： https: //juejin.cn/post/7104101906611437576
    来源： 稀土掘金
著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
