const preço = 100;

const formaDePagamento = 2;


if(formaDePagamento === 1){
    console.log( preço - (preço * 0.1));
}
else if (formaDePagamento === 2){
    console.log( preço - (preço * 0.15));
}
else if (formaDePagamento === 3){
    console.log(preço);
}
else {
    console.log( preço + (preço * 0.1));
}   