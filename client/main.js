const inputText = document.getElementById("input-text")
const textForm = document.getElementById("text-form")
const inspiroContainer = document.getElementById("inspiro-container")
const inspiroBtn = document.getElementById("inspiro-btn");

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};
    
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune")
    .then(function (res) {
      const data = res.data;
      alert(data);
    });
};

function displayQuotes() {
    let select = document.getElementById('goals'); 
    let value = select.options[select.selectedIndex].value; 
    console.log(value);

    if(value === "tip1") {
        alert("I refuse to accept other people's ideas of happiness for me. As if there's a one size fits all standard for happiness.- Kanye West");
    } else if (value === "tip2"){
        alert("Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer. -Oprah Winfrey")
    } else if (value === "tip3"){
        alert("The secret to a happy marriage? Do whatever your wife tells you. Yes, dear. And breathe. - Denzel Washington")
    } else {
        alert("Choose an option.")
    }
};
    

inspiroBtn.addEventListener("click", getInspiration)

function getInspiration(){

  let randomNumber = Math.floor(Math.random() * 2746);

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    inspiration = data[randomNumber];

    
    inspiroContainer.innerHTML = JSON.stringify(inspiration.text);
  });
}
