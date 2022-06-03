import 
const userRequest = axios.create({
    baseUrl: 'https://api/user/'
})

export const postUserLogin = data => userRequest.post('/signIn',data)
export const postUserLogout = data => userRequest.post('/signOut', data)
export const postUserSignUp = data => userRequest.post('/signUp', data)
