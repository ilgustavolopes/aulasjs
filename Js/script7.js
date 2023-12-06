document.getElementById("btmostrar").addEventListener("click", function(){
    let inMedicamento = document.getElementById("inMedicamento").value;
    let inPreco = document.getElementById("inPreco").value;

    if(isNaN(inPreco)){
        alert("digite um numero");
        return;
    }
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent = "Promocao de" + inMedicamento.value;
    document.getElementById("outPromocao").textContent = "Preço:" + promocao;
}
)