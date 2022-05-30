const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//get Quotes from API
let apiQuotes = [];

//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote

function newQuote(){

    //pick a random quote from apiQuote array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //check if Author is blank and replace with 'unknown'
    if(!quote.author) {
        quoteAuthor.textContent = 'Unknown'
    }else{
        quoteAuthor.textContent = quote.author;
    }

    //check the quote length to determine styling

    if(quote.text.length >120) {
        quoteText.classList.add('long-quote')
    }else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;
}

//Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        //Catch Error Here
    }
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);

//On Load
// getQuotes();
loading();