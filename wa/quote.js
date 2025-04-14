const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const getQuoteBtn = document.getElementById('getQuote');
const tweetBtn = document.getElementById('tweetQuote');

async function fetchQuote() {
  quoteEl.textContent = 'Loading...';
  authorEl.textContent = '';
  tweetBtn.href = '#';

  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.quote}" — ${data.author}`)}`;
  } catch (error) {
    quoteEl.textContent = 'I am sorry, could not find this type of quote.';
    authorEl.textContent = '';
  }
}

getQuoteBtn.addEventListener('click', fetchQuote);
