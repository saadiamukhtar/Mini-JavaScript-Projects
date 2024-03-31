const currencyEl_one= document.getElementById('currency-one');
const currencyEl_two= document.getElementById('currency-two');
const amountOne= document.getElementById('amount-one');
const amountTwo= document.getElementById('amount-two');
const rateElement= document.getElementById('rate');
const swapel= document.getElementById('swap');


// Fetch Exchange Rates and update dom 
function calculate(){
    const currency_one= currencyEl_one.value;
    const currency_two= currencyEl_two.value;
    // console.log(currency_one,currency_two);
    fetch(`https://v6.exchangerate-api.com/v6/a34925252af9bea3ab5d6fc1/latest/${currency_one}`).then(res => res.json())
    .then(data => {
        console.log(data);
        const rate= data.conversion_rates[currency_two];
        // console.log(rate);
        rateElement.innerText= `1 ${currency_one}= ${rate} ${currency_two}`;
        amountTwo.value= (amountOne.value*rate).toFixed(2);

    });

}
currencyEl_one.addEventListener('change',calculate);
 currencyEl_two.addEventListener('change',calculate);
 amountOne.addEventListener('input',calculate);

 amountTwo.addEventListener('input',calculate);
 swapel.addEventListener('click',()=>{

    const temp= currencyEl_one.value;
    currencyEl_one.value= currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate();
 } );

 calculate();
