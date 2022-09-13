const registerHandler = () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const userName = document.getElementById('userName');
    const number = document.getElementById('phoneNumber');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const registerBtn = document.getElementById('register');
    const error = document.getElementById('error');
    const link = document.getElementById('link');

    const isEmpty = () => {
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let userNameValue = userName.value;
        let numberValue = number.value;
        let emailValue = email.value;
        let passwordValue = password.value;

        const isDisabled = !(firstNameValue?.length &&
            lastNameValue?.length &&
            userNameValue?.length &&
            numberValue?.length &&
            emailValue?.length &&
            passwordValue?.length);
        registerBtn.disabled = isDisabled;
    }

    const getInputValue = () => {
        let obj = {};
        obj.firstName = firstName.value;
        obj.lastName = lastName.value;
        obj.username = userName.value;
        obj.phoneNumber = number.value;
        obj.email = email.value;
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

    firstName.onfocus = inputFocus;
    lastName.onfocus = inputFocus;
    userName.onfocus = inputFocus;
    number.onfocus = inputFocus;
    email.onfocus = inputFocus;
    password.onfocus = inputFocus;

    firstName.addEventListener('keyup', isEmpty);
    lastName.addEventListener('keyup', isEmpty);
    userName.addEventListener('keyup', isEmpty);
    number.addEventListener('keyup', isEmpty);
    email.addEventListener('keyup', isEmpty);
    password.addEventListener('keyup', isEmpty);
    link.addEventListener('click', clearLS);

    registerBtn.addEventListener('click', () => {
        const fields = getInputValue();

        API.registerUser(fields)
        .then(async data => {
            const body = await data.json();
            if (data.ok) {
                location.href = 'login.html';
            } else {
                error.innerHTML = body.error.message;
                registerBtn.setAttribute("disabled", false);
            }
        })
    });
}

registerHandler();