import PromptSync = require('prompt-sync');
import { Menu } from './Menu';
const prompt = PromptSync();

function mostraMenu(){
    console.clear();
    console.log('-=-= Menu de opções =-=-\n')
    console.log('[1] cadastrar')
    console.log('[2] logar')
    console.log('[3] sair')
    const option = prompt("escolha sua opção: ");
    let game: Menu;

    switch(option){
        case 1:
            game = Menu.cadastro;
            break;

        case 2:
            game = Menu.login;
            break;
            
        case 3:
            game = Menu.sair;
            break;
    }

    return game;
}
export{mostraMenu};