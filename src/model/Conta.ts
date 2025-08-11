
import { Colors } from "../util/Colors";
import { ContaPoupanca } from "./ContaPoupanca";

//Como a Classe Conta se tornou uma Classe Abstrata, não é possível instanciar Objetos desta Classe. Observe na imagem abaixo, que depois de salvar a alteração na Classe Conta, automaticamente a Classe Menu apresentou uma indicação de erro:
export abstract class Conta {
  static cadastrar(cp1: ContaPoupanca) {
    throw new Error("Method not implemented.");
  }
  static gerarNumero(): number {
    throw new Error("Method not implemented.");
  }
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public get numero() {
    return this._numero;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public get agencia() {
    return this._agencia;
  }

  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get titular() {
    return this._titular;
  }

  public set titular(titular: string) {
    this._titular = titular;
  }

  public get saldo() {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\n Saldo Insuficiente!");
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
    }

    console.log(
      Colors.fg.whitestrong,
      "\n\n*****************************************************",
      Colors.reset
    );
    console.log(Colors.fg.bluestrong, "Dados da Conta:"), Colors.reset;
    console.log("*****************************************************");
    console.log(
      Colors.fg.bluestrong,
      "Numero da Conta: " + this._numero,
      Colors.reset
    );
    console.log(
      Colors.fg.bluestrong,
      "Agência: " + this._agencia,
      Colors.reset
    );
    console.log(Colors.fg.bluestrong, "Tipo da Conta: " + tipo, Colors.reset);
    console.log(
      Colors.fg.bluestrong,
      "Titular: " + this._titular,
      Colors.reset
    );
    console.log(
      Colors.fg.bluestrong,
      "Saldo: " + this._saldo.toFixed(2),
      Colors.reset
    );
  }
}
