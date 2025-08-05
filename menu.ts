import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { read } from "node:fs";

export function main() {
  
  // instancia da classe ContaController
  let contas: ContaController = new ContaController(); //Cria um Objeto da Classe ContaController, para armazenar os dados das contas no Array listaContas e executar os Métodos implementados na Classe (Métodos do CRUD e Métodos Bancários).

  // Variaveis Auxiliares
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ['Conta Corrente', 'Conta Poupanca']; //Note que na linha 15 foi criado um Array chamado tiposContas, que contém os tipos de Contas que o Banco oferece. Esse Array será utilizado no formulário, para escolher o tipo da conta.

  // Objeto da Classe Conta (Teste)

  const contacorrente: ContaCorrente = new ContaCorrente( 2,123,1,"Flavia",15000,1000);

  console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Flavia", 100.000, 10.000);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();

  while (true) {
    console.log(Colors.bg.whitebright,Colors.fg.yellow,"                                                    ",Colors.reset);
    console.log(Colors.bg.whitebright,"                                                     ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"                  BANCO PERIFA                      ",Colors.reset);
    console.log(Colors.bg.whitebright,"                                                     ",Colors.reset);
    console.log(Colors.bg.whitebright,"|||||||||||||||||||||||||||||||||||||||||||||||||||||",Colors.reset);
    console.log(Colors.bg.whitebright,"                                                     ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            1 - Criar Conta                         ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            2 - Listar todas as Contas              ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            3 - Acessa Conta                        ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            4 - Atualizar Dados da Conta            ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            5 - Apagar Conta                        ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            6 - Sacar                               ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            7 - Depositar                           ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            8 - Transferir valores entre Contas     ",Colors.reset);
    console.log(Colors.bg.whitebright,Colors.fg.bluestrong,"            9 - Sair                                ",Colors.reset);
    console.log(Colors.bg.whitebright,"                                                     ",Colors.reset);
    console.log(Colors.bg.whitebright,"|||||||||||||||||||||||||||||||||||||||||||||||||||||",Colors.reset);
    console.log(Colors.bg.whitebright,"                                                     ",Colors.reset);
    console.log(Colors.fg.bluestrong, "Escolha uma opção: ", Colors.reset);
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {

console.log(Colors.bg.redbright,Colors.fg.brownstrong,   "▄▄▄▄·  ▄▄▄·  ▐ ▄  ▄▄·            ▄▄▄·▄▄▄ .▄▄▄  ▪  ·▄▄▄ ▄▄▄· ",Colors.reset);
console.log(Colors.bg.redbright,Colors.fg.brownstrong,   "▐█ ▀█▪▐█ ▀█ •█▌▐█▐█ ▌▪▪         ▐█ ▄█▀▄.▀·▀▄ █·██ ▐▄▄·▐█ ▀█ ",Colors.reset);
console.log(Colors.bg.green,Colors.fg.brownstrong,       "▐█▀▀█▄▄█▀▀█ ▐█▐▐▌██ ▄▄ ▄█▀▄      ██▀·▐▀▀▪▄▐▀▀▄ ▐█·██▪ ▄█▀▀█ ",Colors.reset);
console.log(Colors.bg.green,Colors.fg.brownstrong,       "██▄▪▐█▐█ ▪▐▌██▐█▌▐███▌▐█▌.▐▌    ▐█▪·•▐█▄▄▌▐█•█▌▐█▌██▌.▐█ ▪▐▌",Colors.reset);
console.log(Colors.bg.yellowbright,Colors.fg.brownstrong,"·▀▀▀▀  ▀  ▀ ▀▀ █▪·▀▀▀  ▀█▄▀▪    .▀    ▀▀▀ .▀  ▀▀▀▀▀▀▀  ▀  ▀ ",Colors.reset);
console.log(Colors.bg.yellowbright,"                                                             ",Colors.reset);

      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log(Colors.fg.bluestrong, "\n\nCriar Conta\n\n", Colors.reset);

        console.log('Digite o número da agência: ');
        agencia = readlinesync.questionInt ('');

        console.log('Digite o nome do títular da conta: ');
        titular = readlinesync.question('');

        console.log('\nDigite o tipo da conta: ');
        tipo = readlinesync.keyInSelect (tiposContas, '', {cancel: false}) + 1;

        console.log('\nDigite o saldo da conta (R$): ');
        saldo = readlinesync.questionFloat ('');
        
    switch (tipo){
      case 1:
        console.log('Digite o limnite da conta (R$): ');
        limite = readlinesync. questionFloat (''),
        contas.cadastrar(
          new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
        break;
      case 2:
        console.log('Digite o dia do aniversário da conta poupança: ');
          aniversario = readlinesync.questionInt('')
          contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
         break;
    }

    keyPress()
      case 2:
        console.log(Colors.fg.bluestrong,"\n\nListar todas as contas\n\n",Colors.reset);
        contas.listarTodas();
        break;
        
      case 3:
        console.log(Colors.fg.bluestrong,"\n\nConsultar dados da conta - Por número\n\n",Colors.reset);

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt(''); // Foi criada a entrada de dados via teclado para a variável numero, que receberá o numero da conta que deverá ser procurada no Array listaContas.
        contas.procurarPorNumero(numero); //  Executa o Método procurarPorNumero(numero), da Classe ContaController, passando como parâmetro a variável numero, que contém o numero da conta (recebido via teclado), que deverá ser procurada no Array listaContas.
        
        keyPress()
        break;
      case 4:
        console.log(Colors.fg.bluestrong,"\n\nAtualizar dados da Conta\n\n",Colors.reset);

        break;
      case 5:
        console.log(Colors.fg.bluestrong,"\n\nApagar uma Conta\n\n",Colors.reset);

        break;
      case 6:
        console.log(Colors.fg.bluestrong, "\n\nSaque\n\n", Colors.reset);

        break;
      case 7:
        console.log(Colors.fg.bluestrong, "\n\nDepósito\n\n", Colors.reset);

        break;
      case 8:
        console.log(Colors.fg.bluestrong,"\n\nTransferência entre Contas\n\n",Colors.reset);

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
  console.log(Colors.fg.bluestrong,
    "Projeto Desenvolvido por: Generation Brasil - generation@generation.org ",Colors.reset);
  console.log(Colors.fg.bluestrong,"Karpa Tech - karpatech2025@gmail.com",Colors.reset);
  console.log(Colors.fg.bluestrong,"https://github.com/KarpaTech",Colors.reset);
  console.log("*****************************************************",Colors.reset);
}

function keyPress(): void {
  console.log(Colors.reset, "");
  console.log(Colors.fg.magenta,"\nEntrar.",Colors.reset);
  readlinesync.prompt();
}
main();

