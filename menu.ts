/*
classDiagram
class Conta {
  - numero : number
  - agencia : number
  - tipo : number
  - titular : string
  - saldo : number
  + get numero() number
  + get agencia() number
  + get tipo() number
  + get titular() string
  + get saldo() number
  + set numero(numero: number) void
  + set agencia(agencia: number) void
  + set tipo(tipo: number) void
  + set titular(titular: string) void
  + set saldo(saldo: number) void
  + sacar(valor: number) boolean
  + depositar(valor: number) void
  + visualizar() void
}
class ContaCorrente {
  - limite : number
  + get limite() number
  + set limite(limite: number) void
  + sacar(number valor) boolean
  + visualizar() void
}
class ContaPoupanca {
  - aniversario : number
  + get aniversario() number
  + set aniversario(aniversario: number) void
  + visualizar() void
}
Conta <|-- ContaCorrente
Conta <|-- ContaPoupanca
*/

import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/util/model/ContaCorrente";
import { ContaPoupanca } from "./src/util/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // Objeto da Classe Conta (Teste)

  const contacorrente: ContaCorrente = new ContaCorrente( 2,123,1,"Flavia",15000,1000);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(3,123,2,'PH',1000,10);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log(
      Colors.bg.whitebright,
      Colors.fg.yellow,
      "                                                    ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "                                                     ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "                  BANCO PERIFERIA                   ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "                                                     ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "|||||||||||||||||||||||||||||||||||||||||||||||||||||",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "                                                     ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            1 - Criar Conta                         ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            2 - Listar todas as Contas              ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            3 - Acessa Conta                        ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            4 - Atualizar Dados da Conta            ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            5 - Apagar Conta                        ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            6 - Sacar                               ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            7 - Depositar                           ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            8 - Transferir valores entre Contas     ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      Colors.fg.bluestrong,
      "            9 - Sair                                ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "                                                     ",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "|||||||||||||||||||||||||||||||||||||||||||||||||||||",
      Colors.reset
    );
    console.log(
      Colors.bg.whitebright,
      "                                                     ",
      Colors.reset
    );

    console.log(Colors.fg.greenstrong, "Escolha uma opção: ", Colors.reset);
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(Colors.fg.greenstrong, "\nBanco Periferia - De Nós Pra Nós!");
      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(Colors.fg.bluestrong, "\n\nCriar Conta\n\n", Colors.reset);

        break;
      case 2:
        console.log(
          Colors.fg.bluestrong,
          "\n\nListar todas as Contas\n\n",
          Colors.reset
        );

        break;
      case 3:
        console.log(
          Colors.fg.bluestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          Colors.reset
        );

        break;
      case 4:
        console.log(
          Colors.fg.bluestrong,
          "\n\nAtualizar dados da Conta\n\n",
          Colors.reset
        );

        break;
      case 5:
        console.log(
          Colors.fg.bluestrong,
          "\n\nApagar uma Conta\n\n",
          Colors.reset
        );

        break;
      case 6:
        console.log(Colors.fg.bluestrong, "\n\nSaque\n\n", Colors.reset);

        break;
      case 7:
        console.log(Colors.fg.bluestrong, "\n\nDepósito\n\n", Colors.reset);

        break;
      case 8:
        console.log(
          Colors.fg.bluestrong,
          "\n\nTransferência entre Contas\n\n",
          Colors.reset
        );

        break;
      default:
        console.log(Colors.fg.bluestrong, "\nOpção Inválida!\n", Colors.reset);

        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log(
    "Projeto Desenvolvido por: Generation Brasil - generation@generation.org "
  );
  console.log("Karpa Tech - karpatech2025@gmail.com");
  console.log("https://github.com/KarpaTech");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(Colors.reset, "");
  console.log("\nEntrar.");
  readlinesync.prompt();
}
main();

