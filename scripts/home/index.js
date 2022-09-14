const homeHandler = () => {
    const token = tokenService.getToken();

    if ((!token == true)) {
        location.href = 'login.html';
    } 

    API.checkToken()
        .then(async data => {
            const body = await data.json();
            render.hideLoader();
            if (data.ok) {
                render.showUserInfo(body);
            } else {
                location.href = 'login.html';
            }
        })
}

homeHandler();