
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://br.linkedin.com/");
    window.location.href = "https://br.linkedin.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1+n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5,15));
*/

/*
var d = new Date();
//alert(d.getMonth()+1);
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count=1; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    //alert(count);
    count = count + 1; // ou count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
/*

/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); //insere na lista
//lista.pop(); // deleta ultimo elemento da lista
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "))
console.log(lista.length); //mostra numero de elementos na lista
console.log(lista.reverse());
*/

/*var nome = "Madson Rocha";
var n1 = 5;
var n2 = 3;
var frase = "Brasil é o melhor time do mundo!";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Brasil", "Santa Cruz"));
*/