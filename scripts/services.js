const registerUser = (data) => {
    return fetch('https://hosana-api.herokuapp.com/api/auth/local/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

const API = {
    registerUser
}

const loginUser = (data) => {
    return fetch('https://hosana-api.herokuapp.com/api/auth/local', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

const logAPI = {
    loginUser
}

const checkToken = () => {
    const token = DB.getToken();

    return fetch('https://hosana-api.herokuapp.com/api/me', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
    })
}

const userAPI = {
    checkToken
}