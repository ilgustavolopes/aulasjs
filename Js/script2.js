//oblur
function blurFunction(){
    document.getElementById("myInput").style.background="red";
}
//onchange
function myFunction(val){
    alert("mudou para " + val);
}
//load function //onload da pagina (abrindo ela)
function loadFunction(){
    alert("Pagina carregada seja bem vindo!!!!");
}
//onmousedown
function mouseDown(){
    document.getElementById("myP").style.color = "red";
}
//onmouseup
function mouseUp(){
    document.getElementById("myP").style.color = "green";
}
//coordenada imagem com mouseout e mouseover
function coordenadasFigura(event){
    var x = event.clientY;
    var y = event.clientX;
    var coor = "Cordenadas: (" + x + ", " + y + ")";
    document.getElementById("demo3").innerHTML = coor; 
}
function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}
