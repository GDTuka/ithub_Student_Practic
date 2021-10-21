const btn1 = document.getElementById('btnEnter')



btn1.addEventListener('click' ,e=>{
    let login = document.getElementById('inputLogin').value
    console.log(login)
    //send({newsTxT : login,password:pwd,mail:mail,admin:false,teacher:false,junAdmin:false,middleAdmin:false})
})

const send = async(body) => {
    let res = await fetch("/api", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
}
