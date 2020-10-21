var quotes = [
    "That might be poop",
    "Oh that's poop",
    "Wait, maybe that's just dirt?",
    "Nevermind it's just a coffee stain."
];

var random = Math.floor(Math.random()* quotes.length);

function printQuotes(q){
    console.log(q);
}

printQuotes(quotes[random]);