const form = document.querySelector("form");
let date = document.querySelector("input[type=date]").value;
console.log(date);
let url = `http://api.exchangeratesapi.io/v1/${date}?access_key=876fddb6aa3434033523b5285d1992f5&format=1`;
//dateUpdate(url);
let rates
form.addEventListener("submit", (e) =>{
    e.preventDefault();
})
fetch(url).then(response => response.json()).then(data => {
    rates = data.rates;
}).catch(error => {
    console.log("error :",error)
})

document.querySelector("button").onclick = () => {
    let value = document.querySelector("input[type=text]").value;
    let exchangeRate = document.querySelector("select").value;
    let totalExchange = value * rates[exchangeRate]
    document.querySelector(".result").innerText = `${value} in EUR is ${totalExchange} en ${exchangeRate}`
}

function dateUpdate(){
    let dateUpdate = document.querySelector("input[type=date]").value;
    date = dateUpdate;
    url = `http://api.exchangeratesapi.io/v1/${date}?access_key=876fddb6aa3434033523b5285d1992f5&format=1`
    console.log(date);
}