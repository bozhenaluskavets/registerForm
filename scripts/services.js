const registerUser = (data) => {
    return fetch('https://hosana-api.herokuapp.com/api/auth/local/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

const loginUser = (data) => {
    return fetch('https://hosana-api.herokuapp.com/api/auth/local', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

const checkToken = () => {
    const token = tokenService.getToken();

    return fetch('https://hosana-api.herokuapp.com/api/me', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
    })
}

const API = {
    registerUser,
    loginUser,
    checkToken
}