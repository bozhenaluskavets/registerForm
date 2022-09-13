const dataHandler = () => {

    const setToken = (token) => {
        window.localStorage.setItem('token', token)
    }

    const getToken = () => {
        const token = window.localStorage.getItem('token')
        console.log(token)
        return token
    }

    return { setToken, getToken }
}

const DB = dataHandler();