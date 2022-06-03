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

