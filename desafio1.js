/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem;

Gasolina = 5R$
Ditância em KM = 100km
Combustível médio usado = 10L
*/

const p2 = 5.79
const p1 = 10
const p3 = 100

console.log (p3/p1*p2)


/* Outra jeito de fazer a mesma conta. Achei que o p1,p2 e p3 era usado para diferenciar, entretanto esse valores podem ser qualquer coisa como no exemplo abaixo
O comando tofixed serve para diminuir a casas e arredondar
*/

const PreçoCombustível = 5.79;
const KmPorLitros = 12;
const DistânciaEmKm = 1580;

const litrosConsumidos = DistânciaEmKm / KmPorLitros
const ValorGasto = litrosConsumidos * PreçoCombustível
console.log(ValorGasto.toFixed(2))

