
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')
const singInDiv = document.getElementById("SingIn")
const btn1 = document.getElementById('btn1')

function makewNewNews(zagTxt,newsTxT){

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
    let arr = ['1','2',"3"]
    for(let i = 0;i<3;i++){

        let newNewsObj = document.createElement('div')
        let zagDiv = document.createElement('div')
        let newsTxTdiv = document.createElement('div')
    
        zagDiv.innerHTML += arr[i]
        newsTxTdiv.innerHTML += arr[i]
    
        newNewsObj.setAttribute("class","newsObj")
        zagDiv.setAttribute("class","newsZag")
        newsTxTdiv.setAttribute("class","newsTxT")
    
        newNewsObj.prepend(zagDiv)
        newNewsObj.append(newsTxTdiv)
    
        mainNewsElem.insertBefore(newNewsObj,btn1)
    }
}
btn1.addEventListener('click',e=>{
    console.log('1234')
    addNews()
})
function isSingIn(){
    // Проверка на то вошёл пользователь или нет будет добавлена позже пока просто переход на страницу логина

}
const take = async ()=>{
    let res = await fetch('/api/data')
    let data = await res.json()
    console.log(data.shit)
}
take()

makewNewNews('Заголовок' ,"Новостной текст1")
makewNewNews('Заголовок' ,"Новостной текст2")
makewNewNews('Заголовок' ,"Новостной текст3")
isSingIn()
