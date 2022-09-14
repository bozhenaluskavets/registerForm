const renderHandler = () => {
    const userInfo = document.getElementById('userInfo');
    const loader = document.getElementById("loading");

    const hideLoader = () => {
        loader.style.display = "none";
    }

    const showUserInfo = (body) => {
        const firstName = document.createElement('p')
        firstName.innerHTML = `FirstName:  ${body.firstName}`;
        firstName.classList.add('item')
        userInfo.appendChild(firstName);

        const lastName = document.createElement('p')
        lastName.innerHTML = `LastName:  ${body.lastName}`;
        lastName.classList.add('item')
        userInfo.appendChild(lastName);

        const username = document.createElement('p')
        username.innerHTML = `Username:  ${body.username}`;
        username.classList.add('item')
        userInfo.appendChild(username);

        const phoneNumber = document.createElement('p')
        phoneNumber.innerHTML = `Phone number:  ${body.phoneNumber}`;
        phoneNumber.classList.add('item')
        userInfo.appendChild(phoneNumber);

        const email = document.createElement('p')
        email.innerHTML = `Email:  ${body.email}`;
        email.classList.add('item')
        userInfo.appendChild(email);
    }

    return { showUserInfo, hideLoader }

}

const render = renderHandler();