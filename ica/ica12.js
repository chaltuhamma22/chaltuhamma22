const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
let current = {
    question: "",
    answer: ""
};

document.querySelector('#js-new-quote').addEventListener('click', getQuote);
document.querySelector('#js-tweet').addEventListener('click', showAnswer);

getQuote();

async function getQuote(){
    try {
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.question);
        current.question = json.question;
        current.answer = json.answer;
        document.querySelector('#js-answer-text').textContent = ""; 
    } catch(err){
        console.log(err);
        alert('Fail');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer(answer){
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

function showAnswer(){
    displayAnswer(current.answer);
}
