const form = document.querySelector("form");
let dateInput = document.querySelector("input[type=date]");
let url = `http://api.exchangeratesapi.io/v1/latest?access_key=876fddb6aa3434033523b5285d1992f5&format=1`;
//dateUpdate(url);
let rates
form.addEventListener("submit", (e) =>{
    e.preventDefault();
})
fetch(url).then(response => response.json()).then(data => {
    rates = data.rates;
    console.log(rates)
}).catch(error => {
    console.log("error :",error)
})

document.querySelector("button").onclick = () => {
    let value = document.querySelector("input[type=text]").value;
    
    let exchangeRate = document.querySelector("select").value;
    console.log(value,exchangeRate);
    let totalExchange = value * rates[exchangeRate]
    document.querySelector(".result").innerText = `${value} in EUR is ${totalExchange} en ${exchangeRate}`
}

function dateUpdate(){
    let dateUpdate = dateInput.value;
    url = `http://api.exchangeratesapi.io/v1/${dateUpdate}?access_key=876fddb6aa3434033523b5285d1992f5&format=1`
    console.log(dateUpdate);
    fetch(url).then(response => response.json()).then(data => {
    rates = data.rates;
    console.log(rates)
}).catch(error => {
    console.log("error :",error)
})
}