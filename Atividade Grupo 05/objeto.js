const pessoa = {
    nome: 'Karlos Vieira',
    idade: '25',
    altura: '1.80m',
    peso: '73kg',
    CPF: '134.089.552-37'
};

function exibePropriedade (){
    let resultado = pessoa.altura;
    console.log(`a altura da pessoa é ${resultado}`); 

};

exibePropriedade();