const userRequest = axios.create({
    baseUrl: 'https://api/user/'
})

export const postUserLogin = data => {userRequest.post('/signIn')}