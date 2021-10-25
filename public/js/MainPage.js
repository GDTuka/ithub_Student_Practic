
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')
const singInDiv = document.getElementById("SingIn")
const btn1 = document.getElementById('btn1')
const nav = document.getElementById('nav')


let dataNews = [];
let userData = []
let length = 3
let i = 0

const takeNews = async() =>{
    let res = await fetch('/api/news')
    dataNews = await res.json()
    if (dataNews != null){
        addNews()
    }
}
takeNews()
singInDiv.innerHTML += "войти"
const takeUserLogin = async() =>{
    let res = await fetch('/api/data')
    userData = await res.json()
    if(userData != null){
        singInDiv.innerHTML = userData.login
        singInDiv.setAttribute('href','/profile')
        ifUserAdmin(userData)
    }
}

takeUserLogin()

function ifUserAdmin(userData){
    console.log('123441')
    if(userData.admin == true){
        let newDiv = document.createElement('div')
        let newHref = document.createElement('a')

        let newDiv2 = document.createElement('div')
        let newHref2 = document.createElement('a')

        let newDiv3 = document.createElement('div')
        let newHref3 = document.createElement('a')


        newHref2.setAttribute('href','/addMaterialAdmin')
        newDiv2.setAttribute('class','navObj')

        newHref.setAttribute('href','/addNewsAdmin')
        newDiv.setAttribute('class','navObj')

        newHref.innerHTML += "Добавить Новость"
        newHref2.innerHTML += "Добавить Изучение"
        newHref3.innerHTML += "Добавить Тест"
        
        newHref3.setAttribute('href','/addTest')
        newDiv3.setAttribute('class','navObj')

        newDiv2.append(newHref2)
        newDiv.append(newHref)
        newDiv3.append(newHref3)
        nav.append(newDiv)
        nav.append(newDiv2)
        nav.append(newDiv3)
    }
}

function addNews(){
    console.log("делаю новости")
    for(let j = 0; i<length;i++){
        console.log(i)
        let newNewsObj = document.createElement('div')
        let zagDiv = document.createElement('div')
        let newsTxTdiv = document.createElement('div')
    
        zagDiv.innerHTML += dataNews[i].newsZag
        newsTxTdiv.innerHTML += dataNews[i].newsTxT
    
        newNewsObj.setAttribute("class","newsObj")
        zagDiv.setAttribute("class","newsZag")
        newsTxTdiv.setAttribute("class","newsTxT")
    
        newNewsObj.prepend(zagDiv)
        newNewsObj.append(newsTxTdiv)
    
        mainNewsElem.insertBefore(newNewsObj,btn1)
    }
    length = length +3; 
}
btn1.addEventListener('click',e=>{
    addNews()
})
