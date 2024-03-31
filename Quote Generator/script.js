const quote= document.getElementById('quote');
const author= document.getElementById('author');
const newQuote_btn= document.getElementById('new-quote');
const tweet_btn= document.getElementById('tweet');
const url= "https://type.fit/api/quotes";


async function getQuote(){
    const response= await fetch(url);
    let data= await response.json();
    console.log(data);
    const randomIndex= Math.floor(Math.random()* data.length);
    const randomQuote= data[randomIndex].text;
    const rad= data[randomIndex].author.split(",");
    randomAuthor=rad[0];
    console.log(randomAuthor);
    quote.innerHTML= randomQuote;
    author.innerHTML= randomAuthor;

}

getQuote();
newQuote_btn.addEventListener('click',getQuote);
tweet_btn.addEventListener('click',tweetButton);
// fetch(api_url)
// .then(respnse => response.json())
// .then(data => {
//     const randomIndex= Math.floor(Math.random()* data.length);
//     const randomQuote= data[randomIndex];
//     comsole.log(randomQuote.author);
//     console.log(randomQuote.text);
// })

function tweetButton(){
    // console.log("hekllo");
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML ,  "Tweet Window", "width=600", "height-300");
}

