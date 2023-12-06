//formulario submit e reset

function submitFunction(campo1,campo2){
    if(campo1.value == null || campo1.value == ""){
        alert("Campo 1 esta vazio");
    }else if(campo2.value == null || campo2.value == ""){
        alert("Campo 2 esta vazio");
    }else{
        alert("Obrigado!!!");
    }
}
//fechar pagina
window.onbeforeunload = function(){
    return 'ja vai?';
}
// <!-- evento e funçao quando quero fazer uma açao na pagina -->