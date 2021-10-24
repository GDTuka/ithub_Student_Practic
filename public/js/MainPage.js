
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')
const singInDiv = document.getElementById("SingIn")
const btn1 = document.getElementById('btn1')


let dataNews = [];
let length = 3
let i = 0
let sometestlet 
const take = async() =>{
    let res = await fetch('/api/news')
    dataNews = await res.json()
    sometestlet = dataNews[0].newsZag
}
take()
console.log(sometestlet)
btn1.addEventListener('click',e=>{
    console.log('134')
    addNews()
})
function makewNewNews(zagTxt,newsTxT){
    console.log("Пытаюсь сделать новость")
    let newNewsObj = document.createElement('div')
    let zagDiv = document.createElement('div')
    let newsTxTdiv = document.createElement('div')

    zagDiv.innerHTML += zagTxt
    newsTxTdiv.innerHTML += newsTxT

    newNewsObj.setAttribute("class","newsObj")
    zagDiv.setAttribute("class","newsZag")
    newsTxTdiv.setAttribute("class","newsTxT")



    newNewsObj.prepend(zagDiv)
    newNewsObj.append(newsTxTdiv)

    mainNewsElem.insertBefore(newNewsObj,btn1)
}
function addNews(){
    for(let j = 0; i<length;i++){
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
    length=length+3
}
setTimeout(() => {
    addNews()
}, 1000);
function isSingIn(){
    singInDiv.innerHTML += "Войти"
}
isSingIn()