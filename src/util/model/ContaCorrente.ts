import { Conta } from "./Conta"; //Linha 01: Através da palavra reservada import, importamos a Classe Model Conta.

export class ContaCorrente extends Conta { //Linha 02: Observe que na assinatura da Classe ContaCorrente, vamos adicionar a palavra reservada extends e na sequência o nome da Classe que será herdada (Conta)
 
  private _limite: number;// Linha 05: Adicionamos o atributo _limite, específico da Classe ContaCorrente.

  constructor( // Linha 07: O Método Construtor foi criado com os respectivos parâmetros herdados da Classe Conta e os seus parâmetros específicos. Observe que as variáveis inseridas possuem o mesmo nome e tipo dos Atributos da Classe Conta e ContaCorrente. Ao instanciar uma novo Objeto, o Método Construtor receberá todos os dados do Objeto através deste parâmetros, que serão atribuídos aos Atributos do Objeto
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo); //Linha 15: Observe que os Atributos da Classe Conta são acessados e modificados através do Método super(). Nos argumentos do Método super(), foram adicionados apenas os parâmetros do Método Construtor ContaCorrente, que serão recebidos do Método Construtor da Classe Conta. A reutilização do código da Classe Conta, na Classe ContaCorrente é possível graças ao conceito de Herança.


    this._limite = limite; //Linha 18: Vamos adicionar a variável _limite, que representa um Atributo específico da Classe ContaCorrente, que foram definidos no Diagrama de Classes acima. Observe que o Atributo possui o modificador de acesso private, ou seja, é acessível apenas dentro da Classe ContaCorrente.
  //A palavra-chave super refere-se a uma superclasse. Ela indica a chamada ao Método Construtor da superclasse. Caso a superclasse não possua um Método Construtor e o Método Construtor da subclasse não chamar nenhum outro Método Construtor da superclasse explicitamente o TypeScript vai informar um erro.
//Observe que na Classe ContaCorrente foram declaradas apenas as diferenças (Métodos e Atributos) entre a subclasse e superclasse, ou seja, o reuso é automático.
  }

  public get limite() {
    return this._limite;
  }

  public set limite(limite: number) {
    this._limite = limite;
  }

  public sacar(valor: number): boolean {
    if (this.saldo + this._limite < valor) {
      console.log("\n Saldo Insuficiente!");
      return false;
    }

    this.saldo = this.saldo - valor;
    return true;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Limite: " + this._limite.toFixed(2));
  }
}
