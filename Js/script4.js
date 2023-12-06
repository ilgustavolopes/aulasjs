//set timeout e set interval
function myFunction(){
    alert("Olá");
}
//clearinterval

var myVar = setInterval(myTimer, 1000);

function myTimer(){
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//pegando horas,minutos,segundos tentativa clearinterval2.0
/*
function myTimer(){
    var d2 = new Date();

    document.getElementById("demo3").innerHTML = d2.getHours();
    document.getElementById("demo1").innerHTML = d2.getMinutes();
    document.getElementById("demo2").innerHTML = d2.getSeconds();
    
}
*/
//correcao 1.0
/*
function mostraHora(){
    let d = new Date();
    document.body.innerHTML = "<h3>Hora:" + d.getHours() + d.getMinutes() + d.getSeconds() + d.toLocaleTimeString();
}
mostraHora();
*/
//correcao 2.0
/*
function Hora(){
    const tempo = new Date();
    const hora = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`HORA ${hora} : ${min} : ${seg}`);
    document.body.innerHTML = `HORA  ${hora} : ${min} : ${seg}`;
    setInterval(Hora,1000);
}
*/

//anuncio
function functionFundo(){
    document.body.style.backgroundImage = "url(img/pato2.gif)";
}
function functionReset(){
    document.body.style.backgroundImage = "";
}