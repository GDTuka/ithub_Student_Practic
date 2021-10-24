const login = document.getElementById('login')
const mail = document.getElementById('mail')


let userData



const takeUserLogin = async() =>{

    let res = await fetch('/api/data')
    userData = await res.json()
    console.log(userData)
    if(userData != null){
        login.innerHTML += userData.login
        mail.innerHTML += userData.mail
    }
}
takeUserLogin()