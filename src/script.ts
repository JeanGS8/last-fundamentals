import { Almoco } from "./Almoco";

const almoco: Almoco = new Almoco('Peixe', 'Arroz e Feijão');

console.clear();

console.log(almoco.refeicao);

almoco.carne = 'Frango';

console.log(almoco.refeicao);

