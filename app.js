function pegaNome(){
    let nome = prompt ('Digite o seu nome:')
    return nome;
}

function pegaIdade(){
    let idade = prompt ('Digite a sua idade:')
    return idade;
}

function exibirMensagem(nome, idade) {
    alert (`O seu nome é ${nome} e você tem ${idade} anos`)
}

function iniciar(){
    nome = pegaNome();
    idade = pegaIdade(); 
    exibirMensagem(nome, idade)
}

iniciar()
