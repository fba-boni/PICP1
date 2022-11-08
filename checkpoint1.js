/**
 * Primeiro Checkpoint - Turma 1
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
OBS: Entrega até 16/11/2022 -> 23:59
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
- Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

Seguir a regra:
Function microondas(opcao, tempo){
}
Microondas(1,20)

=====================================
Turma 01 - Sala 2 - Participantes:
Edwins Elias Colina
Febronio Bomfim Alves
Nicole Alves Vieira
Thiago Rocha Vasconcelos Silva
Vinicius Figueiredo Alexo
=====================================
Esta entrega é do participante: FEBRONIO BOMFIM ALVES
=====================================

 */

function exibeResultado(tempo, tpadrao) {
    if (tempo < tpadrao) {
        return "Tempo insuficiente";
    } else {
        if (tempo > 3 * tpadrao) {
            return "Kabum!";
        } else {
            if (tempo > 2 * tpadrao) {
                return "Comida Queimou!";
            } else {
                return "Prato Pronto! Bom apetite!";
            }
        }
    }
}

function microondas(opcao, tempo) {
    switch (opcao) {
        case 1:
            console.log("Opção escolhida: 1 - Pipoca - Preparo padrao: 10s - Tempo escolhido: " + tempo + "s");
            console.log(exibeResultado(tempo, 10));
            break;
        case 2:
            console.log("Opção escolhida: 2 - Macarrão - Preparo padrao: 08s - Tempo escolhido: " + tempo + "s");
            console.log(exibeResultado(tempo, 8));
            break;
        case 3:
            console.log("Opção escolhida: 3 - Carne - Preparo padrao: 15s - Tempo escolhido: " + tempo + "s");
            console.log(exibeResultado(tempo, 15));
            break;
        case 4:
            console.log("Opção escolhida: 4 - Feijão - Preparo padrao: 12s - Tempo escolhido: " + tempo + "s");
            console.log(exibeResultado(tempo, 12));
            break;
        case 5:
            console.log("Opção escolhida: 5 - Brigadeiro - Preparo padrao: 08s - Tempo escolhido: " + tempo + "s");
            console.log(exibeResultado(tempo, 8));
            break;
        default:
            console.log("Opção inválida! - Prato inexistente");
    }
}
microondas(1, 31);
microondas(2, 20);
microondas(3, 20);
microondas(4, 20);
microondas(8, 20);
