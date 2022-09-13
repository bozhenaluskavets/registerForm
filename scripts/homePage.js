const homeHangler = () => {
    const link = document.getElementById('link');
    const userInfo = document.getElementById('userInfo');

    const clearLS = () => {
        localStorage.clear();
    }

    link.addEventListener('click', clearLS);
    
    window.onload = function() { 
        document.getElementById("loading").style.display = "none" 
    }
    
    const token = DB.getToken();

    if ((!token == true)) {
        location.href = 'login.html';
    } 

    userAPI.checkToken()
        .then(async data => {
            const body = await data.json();

            const showUserInfo = () => {
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

            if (data.ok) {
                showUserInfo()
            } else {
                location.href = 'login.html';
            }

        })
}

homeHangler();