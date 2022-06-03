const userRequest = axios.create({
    baseUrl: 'https://api/user/'
})

export const postUserLogin = data => {userRequest.post('/signIn',data)};
export const postUserLogout = data => userRequest.post('/signOut', data)
export const postUserSignUp = data => userRequest.post('/signUp', data)

作者： yueran
链接： https: //juejin.cn/post/7104101906611437576
    来源： 稀土掘金
著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。