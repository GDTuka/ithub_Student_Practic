const btn1 = document.getElementById('testId')



btn1.addEventListener('click' ,e=>{


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
