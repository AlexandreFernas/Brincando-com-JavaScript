function AplicarDesconto(valor, Desconto) {
    return (valor - (valor * (Desconto / 100)));    
}

function AplicarJuros(valor, Juros) {
    return (valor + (valor * (Juros / 100)));
}

const preço = 100;
const formaDePagamento = 4;


if(formaDePagamento === 1){
    console.log(AplicarDesconto(preço, 10));
}
else if (formaDePagamento === 2){
    console.log(AplicarDesconto(preço, 15));
}
else if (formaDePagamento === 3){
    console.log(preço);
}
else {
    console.log(AplicarJuros(preço, 10));
}   



