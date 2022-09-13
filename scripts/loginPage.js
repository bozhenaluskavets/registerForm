const loginHandler = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('login');
    const error = document.getElementById('error');
    const link = document.getElementById('link');

    const isEmpty = () => {
        let emailValue = email.value;
        let passwordValue = password.value;

        const isDisabled = !(emailValue?.length && passwordValue?.length);
        loginBtn.disabled = isDisabled;
    }

    const getInputValue = () => {
        let obj = {};
        obj.identifier = email.value;
        obj.password = password.value;
        return obj;
    }

    const inputFocus = () => {
        if (error.innerHTML != '') {
            error.innerHTML = '';
        }
    }

    const clearLS = () => {
        localStorage.clear();
    }

    email.onfocus = inputFocus;
    password.onfocus = inputFocus;

    email.addEventListener('keyup', isEmpty);
    password.addEventListener('keyup', isEmpty);
    link.addEventListener('click', clearLS);

    loginBtn.addEventListener('click', () => {
        const fields = getInputValue();
        
        logAPI.loginUser(fields)
        .then(async data => {
            const body = await data.json();
            if (data.ok) {
                DB.setToken(body.jwt);
                location.href = 'home.html';
            } else {
                error.innerHTML = body.error.message;
                loginBtn.setAttribute("disabled", false);
            }
        })
    });
}

loginHandler();