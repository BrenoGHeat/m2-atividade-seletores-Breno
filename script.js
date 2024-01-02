/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const meusIngredientes = document.getElementById("ingredients");
console.log(meusIngredientes);

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const meuTitulo = document.getElementsByTagName("h1")[0];
console.log(meuTitulo);

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const recipientes = document.getElementsByClassName("recipe")[0];
console.log(recipientes);


/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const subTitles = document.getElementsByTagName("h2");

 for( let i = 0 ; i < subTitles.length ; i++){
  subTitles[i].style.color = "blue" ;
 }


/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const inputs = document.querySelectorAll("input");

for(let i = 0 ; i < inputs.length ; i++){
  inputs[i].style.borderColor = "red" ;
}
