import { publicDecrypt } from "node:crypto";//depois de implementar a Interface ContaRepository, será exibido um erro na Classe ContaController
import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";
import { Colors } from "../util/Colors";
export class ContaController implements ContaRepository{//Criamos um Array, do tipo Conta (Classe Abstrata), chamado listaContas
    
    private listaContas: Array <Conta> = []
    private numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta != null) {
            buscaConta.visualizar();
        }else
        console.log(Colors.fg.bluestrong,`\nA conta número:${numero}não foi encontrada`, Colors.reset);
    }

    listarTodas(): void{  //Observe que na assinatura do Método não foi inserido nenhum parâmetro, porque o Método exibirá todos os Objetos da Classe Conta, armazenados no Array listaContas.
       
        for (let conta of this.listaContas){ // Através do Laço de Repetição for...of, percorremos todo o Array listaContas.
          conta.visualizar() //Exibe os dados do Objeto da Classe Conta armazenado na variável conta, através do Método visualizar(), que foi criado na Classe Model Conta e Herdado pelas Classes ContaCorrente e ContaPoupanca.
        }

      }  

       //Criamos uma variável do tipo number chamada numero, que armazenará o numero da última conta que foi criada, funcionando como uma Chave Primária auto incremental
    cadastrar(conta: Conta): void { //Observe que na assinatura do Método, foi inserido como parâmetro um Objeto da Classe Conta, chamado conta. Este Objeto será adicionado no Array listaContas.
        this.listaContas.push(conta) // Para inserir um novo Objeto da Classe Conta, utilizamos o Método push(), do Objeto Array, passando como parâmetro o Objeto da Classe Conta, chamado conta.
        console.log(Colors.fg.green, `\nA conta número:${conta.numero}\nFoi criada com sucesso`, Colors.reset) //Exibe uma mensagem no console, indicando que o Objeto da Classe Conta, chamado conta foi adicionado no Array listaContas. Para identificar a conta que foi criada, inserimos o atributo numero, da Classe Model Conta, dentro da mensagem para visualizarmos o número da conta.
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    public gerarNumero(): number { //Observe que na assinatura do Método não foi inserido nenhum parâmetro, porque o Método tem como único Objetivo retornar o número da conta todas as vezes que uma nova conta for cadastrada.
    return ++ this.numero //Como a variável numero foi inicializada com zero (0), vamos incrementar a variável através do operador de pré-incremento (++), incrementando de 1 em 1, a cada nova conta que for criada. Este número será retornado como o número da nova Conta. Desta forma, automatizaremos o processo de geração do número da conta, através de uma sequência:
    }

public buscarNoArray (numero: number): Conta | null {//Observe que na assinatura do Método foi inserido como parâmetro uma variável do tipo number, chamada numero, que receberá o número da conta que se deseja localizar. Observe que no tipo de retorno do Método (Conta), foram adicionadas duas opções de retorno, Conta | null, indicando que o retorno do Método pode ser um Objeto Nulo, caso a conta não seja encontrada, ou um Objeto da Classe Conta, caso a conta seja encontrada.

    for (let conta of this.listaContas) { //Através do Laço de Repetição for...of, percorremos todo o Array listaContas. Observe que a variável local conta, utilizada para receber um Objeto Conta a cada iteração do Array, definida pelo Laço de repetição, foi criada através da palavra reservada let.
    //Assim como no código do Método listarTodas(), o Laço de Repetição percorre todo o Array listaContas, que armazena Objetos da Classe Conta. A palavra reservada let entende que a variável conta deve ser criada como um Objeto da Classe Conta, porque receberá um Objeto da Classe Conta. 
        if (conta.numero === numero) //Verifica se o Atributo numero, do Objeto da Classe Conta armazenado na variável conta é o mesmo número que foi enviado na variável numero.
            return conta; //Se os números forem iguais, o Método devolve o Objeto Conta encontrado e finaliza o Laço de repetição
    }
        return null; // Se o número não for encontrado no Array listaContas, o Método devolve um Objeto Nulo.
}

}

