const botao = document.getElementById("button");
console.log(button);
button.style.backgroundColor = "pink";
const nome = document.getElementById("nome");
nome.value = "Nah";
const idade = document.getElementById("idade");
idade.value = "17";
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Submetido");
});