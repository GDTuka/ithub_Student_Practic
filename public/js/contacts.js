const singInDiv = document.getElementById("SingIn")
singInDiv.innerHTML += "войти"
const takeUserLogin = async() =>{
    let res = await fetch('/api/data')
    userData = await res.json()
    if(userData != null){
        singInDiv.innerHTML = userData.login
        singInDiv.setAttribute('href','/profile')
    }
}
takeUserLogin()
