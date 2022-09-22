import { Menu } from "./Menu";
import { mostraMenu } from "./mostraMenu";

const option = mostraMenu();

if(option == Menu.cadastro){
    console.log('faz o cadastro!');
}

const vetor: number [] = [7, 40, 13, 5, 190, 30];

const found = vetor.filter(element => element > 10); // procura todos os valores que respeitarem a regra
//const found = vetor.find(element => element == 13); // procura o primeiro valor que respeitar a regra

let soma: number;
found.forEach((item) => {
    soma += item;
})
const cardapio = [];
cardapio ['hamburguer'] = 20;
cardapio ['Refrigerante'] = 6;
cardapio ['Batata frita'] = 5;

console.log(cardapio['hamburguer']);

vetor.forEach((item) => {
    console.log(item);
})

const vetor2 = vetor.map((item) => {
    return item*2;
})

// () => {} é uma arrow function

// Função anonima
let media = (nota1: number, nota2: number): number => {
    return (nota1 + nota2) / 2
}

const mediaNotas = media(7, 6);

media = () => {
    return 0;
}

function teste(media){
    console.log('media: ' + media);
}
teste(media(6, 7));