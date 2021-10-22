
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')
const singInDiv = document.getElementById("SingIn")
const btn1 = document.getElementById('btn1')


let dataNews = [];
let length = 6
let i = 3

const take = async() =>{
    let res = await fetch('/api/news')
    dataNews = await res.json()
}
take()

btn1.addEventListener('click',e=>{
    console.log('1234')
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

    console.log(newsTxTdiv)
}
function addNews(){
    for(let j = 0; i<length;i++){
        console.log(dataNews[i])
        let newNewsObj = document.createElement('div')
        let zagDiv = document.createElement('div')
        let newsTxTdiv = document.createElement('div')
    
        zagDiv.innerHTML += dataNews[i].zagTxT
        newsTxTdiv.innerHTML += dataNews[i].newsTxT
    
        newNewsObj.setAttribute("class","newsObj")
        zagDiv.setAttribute("class","newsZag")
        newsTxTdiv.setAttribute("class","newsTxT")
    
        newNewsObj.prepend(zagDiv)
        newNewsObj.append(newsTxTdiv)
    
        mainNewsElem.insertBefore(newNewsObj,btn1)
    }
    i = 3+3;
    length = length +3; 
}
btn1.addEventListener('click',e=>{
    console.log('1234')
    addNews()
})
function isSingIn(){
    singInDiv.innerHTML += "Войти"
}
isSingIn()