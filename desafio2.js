/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variavéis. Sendo elas:
    1 - Preço do Etanol;
    2 - Preço da Gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.
*/

const GasolinoPreco = 5.29;
const EtanolPreco = 4.23;
const DistânciaKM = 530;
const GastoMedioCombustível = 10;
const TipoCombustivel = 'Gasolina';

const litrosConsumidos = DistânciaKM / GastoMedioCombustível

if (TipoCombustivel === 'Etanol') {
    const ValorGasto = litrosConsumidos * EtanolPreco
    console.log(ValorGasto.toFixed(2))
} else { 
    const ValorGasto = litrosConsumidos * GasolinoPreco
    console.log(ValorGasto.toFixed(2))
}