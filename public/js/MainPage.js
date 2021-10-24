
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')
const singInDiv = document.getElementById("SingIn")
const btn1 = document.getElementById('btn1')



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
        singInDiv.setAttribute('href','')
    }
}

takeUserLogin()



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
