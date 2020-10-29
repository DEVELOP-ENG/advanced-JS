var quotes = [
    "That might be poop.",
    "Oh that's poop.",
    "Wait, maybe that's just dirt?",
    "Nevermind it's just a coffee stain.",
    "Actually, I'm just dreaming."
];
function generate(arr){
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[random];        
}


function addQuote() {
    let addInput = quotes;
    let add = document.getElementById("userinput").value;
    if(add == ""){
        alert("Please add a quote!");
    }
    else{
      addInput.push(add);
      document.getElementById("userinput").value = "";
    };
  
  };