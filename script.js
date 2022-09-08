const url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
let quotes = [];
let randomQuote;

const getQuotes = async () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status code error:${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log('data', data);
      quotes = data;
      console.log(quotes);
      getRandomQuote();
      displayQuote();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRandomQuote = () => {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(randomQuote);
};

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const displayQuote = () => {
  quote.innerText = randomQuote.text;
  author.innerText = randomQuote.author;
};

let quoteButton = document.querySelector('.quote-button');
quoteButton.addEventListener('click', () => {
  getQuotes();
});
