//array
/*var pessoas = ["Gustavo","Kleber","Epafras","Giuseppe"];//lista 1
var objetos = ["Colher","Garfo"];//lista 2
var frutas = ["Uva","Maça","Abacaxi"];//lista 3
pessoas[0];//representa Gustavo
pessoas.length;//resultado igual a 4
objetos[objetos.lenght] = "Faca";//add um elemento a lista 2
frutas.indexOf("Uva");//resultado 0

//lista tamanho 7, exibir tamanho, add 2 itens, posiçao do primeiro elemento
var personagens = ["Homem de Ferro","Homem Aranha","Garoto Formiga","Capitão America","Hulk","Batman","Flash"];
document.write("Minha lista de personagens tem tamanho: " + personagens.length + "<br>");
personagens[personagens.length] = "Super Man";
personagens[personagens.length] = "Calango vermelho";
document.write("Minha lista de personagens apos adicionar dois personagens ficou com tamanho: " + personagens.length + "<br>");
document.write("Elemento " + personagens[0] + " esta na posiçao: " + personagens.indexOf("Homem de Ferro") + "<br>");
document.write("Essa é minha lista de personagens: " + "<br>");
for(i=0; i < personagens.length; i++){
    document.write(personagens[i]  + "<br>");
}
*/
//datas
/* 
var d = new Date("October 12, 2023 12:00:00");
document.getElementById("D1").innerHTML = d;

var d = new Date(0);
document.getElementById("D2").innerHTML = d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML = d;
    //o mes vai de 0 (janeiro) a 11 (dezembro)

var d = new Date(2023,11,25); //25 dezembro de 2023/
document.getElementById("D4").innerHTML = d;

var d = new Date();
document.getElementById("D5").innerHTML = d;

var d = new Date();
document.write("<br>" + d.toUTCString()); // Fri, 03 mar 2023 02:11:00 GTM

document.write("<br>" + d.toDateString());// thu 02 2023

document.write("<br>" + d.toLocaleDateString()); //02/03/2023

document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12 : false})); // 23:11:00
*/

//exemplo datas 2
/*
var hoje,prazo;

hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023,10,28);
var dia = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];

document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + 
        (hoje.getMonth()) + "/" + hoje.getFullYear() + "</p>");

document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() + 
        "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "</p>" );
*/

//try e catch
/*
try{
    var x = prompt("Digite ai");

    if(x == "") throw " vazio";
    if(isNaN(x)) throw " não é um numero";
    if(x == 10) throw x;
    console.log(x);
    document.write(x);

}catch(err){
    console.log("Input is " + err);
    document.write("Input is" + err);
}
*/

//try e catch 2
/*
var divisor = prompt("Digite o divisor: ")
var dividendo = prompt("Digite o dividendo: ");
try{
    //adddlert("ERRO!!!");//adddlert nao existe

    if(divisor == 0){
        throw new Error("Erro: Divisão por zero não é permitida");
    }
    var resultado = dividendo/divisor;
    document.write("Resultado: " + resultado);
}catch(err){
    document.write(err.message);
}
*/

//try e catch 3
/*
function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try{
        if(x == "") throw " vazio";
        if(isNaN(x)) throw " não é um numero";
        x = Number(x);
        if(x <5) throw "too low";
        if(x>10) throw "too high";
    }catch(err){
        message.innerHTML = "Input is " + err;
    }
}
*/

//try catch 4
/*
try{
    aaaaaa("ERRO!!!");//adddlert nao existe
}catch(err){
    document.write("<br>"+err.message);
}finally{
    document.write("<br>Será mostrado mesmo com o erro");
}
*/