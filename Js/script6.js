function limpa_form(){//funcao para limpar formulario ao digitar errado
    document.getElementById('rua').value=("");
    document.getElementById('bar').value=("");
    document.getElementById('city').value=("");//recebem nulo
    document.getElementById('uf').value=("");
}
function atualiza_campos(conteudo){
    if(!("erro" in conteudo)){//atualiza os campos com o valor deles
        document.getElementById('rua').value=(conteudo.rua);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.cidade);
        document.getElementById('uf').value=(conteudo.uf);
    }else{
        limpa_form();//limpa o form pois os valores nao existem
        alert("CEP não encontrado!!!");
    }
}
function pesquisaCep(valor){
    //variavel cep recebe apenas valores decimais(inteiros)
    var cep = valor.replace(/\D/g,'');
    //condicao de validacao
    if(cep != ""){
        var validaCep = /^[0-9]{8}$/;
        if(validaCep.test(cep)){
        document.getElementById('rua').value=("carregando...");
        document.getElementById('bairro').value=("carregando...");
        document.getElementById('cidade').value=("carregando...");
        document.getElementById('uf').value=("carregando...");
        //criou nó(elemento)
        var elemento = document.createElement('script');
        //adicionou informaçao ao elemento
        elemento.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=atualiza_campos';
        //insere script no documento e carrega seu conteudo
        document.body.appendChild(elemento);
    }else{
        limpa_form();
        alert("Formato de CEP inválido!");
    }
}
    else{
        limpa_form();
  }
}