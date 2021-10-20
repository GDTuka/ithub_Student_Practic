
const mainNewsElem = document.getElementById("mainNewsElem")
const newsObjLast = document.getElementById('newsObjElem')

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

    mainNewsElem.insertBefore(newNewsObj,newsObjLast)

    console.log(newsTxTdiv)
}
function isSingIn(){
    // Проверка на то вошёл пользователь или нет будет добавлена позже пока просто переход на страницу логина

    let SingInobj = document.createElement('div')
    
}
makewNewNews('Заголовок' ,"Новостной текст1")
makewNewNews('Заголовок' ,"Новостной текст2")
makewNewNews('Заголовок' ,"Новостной текст3")