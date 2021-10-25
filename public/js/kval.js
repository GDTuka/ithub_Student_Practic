const singInDiv = document.getElementById("SingIn")
const right = document.getElementById('right')
const last = document.getElementById('last')
const left = document.getElementById('left')

const takeUserLogin = async() =>{
    let res = await fetch('/api/data')
    userData = await res.json()
    if(userData != null){
        singInDiv.innerHTML = userData.login
        singInDiv.setAttribute('href','/profile')
    }
}
takeUserLogin()

const takeMaterial = async() =>{
    let res = await fetch('/api/material/get')
    materialData = await res.json()
    if(materialData != null){
        for(let i = 0; i<2;i++){
            let divRigth = document.createElement('div')
            let p = document.createElement('p')
            let a = document.createElement('a')

            divRigth.setAttribute('class' , 'dataright')
            a.setAttribute('class','goover')
            a.innerHTML += "Перейти"

            p.innerHTML += materialData[i].materialZag
            divRigth.append(p)

            divRigth.append(a)
            right.append(divRigth)

        }
    }
}
takeMaterial()

const takeTests = async() => {
    let res = await fetch('/api/test/get')
    let testData = await res.json()
    if(testData != null){
        for(let i =0; i<2;i++){

            let divLeft = document.createElement('div')
            let p = document.createElement('p')
            let a = document.createElement('a')

            divLeft.setAttribute('class' , 'dataright')
            a.setAttribute('class','goover')
            a.innerHTML += "Перейти"

            p.innerHTML += testData[i].testName
            divLeft.append(p)
            divLeft.append(a)
            left.append(divLeft)
        }
    }
}
takeTests()