//teste 1 do dom pegando pelo id
/*
var titulo = document.getElementById("t");//seleciona o elemento

var conteudo = titulo.textContent;

console.log(conteudo);
*/

//teste dois com lista nao ordenada pegando pela tag

var x = document.getElementsByTagName("li");//passando pra var x o elemento da tag li
document.getElementById("demo").innerHTML = x[1].innerHTML;
console.log("pegando " + x[1].innerHTML);


//teste tres pegando pela classe
/*
var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";
console.log("JS" + elemento[0].innerHTML);
*/ 

//checkbox
/*
var num = document.getElementsByName("cor").length;
dolcument.getElementById("seletor").innerHTML = num;
console.log("JS numero = " + num);
*/

//imagem
/*
var element = document.getElementById("titulo");

element.innerHTML= "novo cabecalho";
document.getElementById("imagem").src="img/pato2.gif";

document.getElementById("pp").style.color="purple";
*/

//child nodes
/*
var txt = document.getElementById("intro").childNodes[0].textContent;
document.write(txt);
console.log(txt);
*/

//child node 2.0
/*
var x = document.getElementById("left");
var txt = "";
for (var i = 0; i < x.childNodes.length; i++){
    txt += "Nodo: " + x.childNodes[i].nodeName + " Valor: " + x.childNodes[i].nodeValue + "<br>";
}
alert(txt);
*/

//childe nodes3.0
/*
var para = document.createElement("p");
var node = document.createTextNode("Esse é novo");
para.appendChild(node);

var element = document.getElementById("left");
element.appendChild(para);
*/

//div
/*
var para = document.createElement("p");
var node=document.createTextNode("Esse é novo");
para.appendChild(node);

var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para,child);
*/

//bomba
/*
alert("boooooooom");
if(confirm('alerta confirmado'))
    alert('positivo central');
else
    alert('negatiov central');
*/

//quantas images
// document.write(document.images.length);

//onclick dnovo
// function funcao(){
//     alert("Hello World");
// }

//onclickdnvoo
// function bemvindo(nome1,nome2,nome3){
//     alert("Bem Vindo " + nome1 + " "  + nome2 + " "   + nome3 + " ao barquinho");
// }

//multiplicacao
function multiplicacao(a,b){
    return a*b;
}
document.getElementById("resposta").innerHTML = multiplicacao(5,2);