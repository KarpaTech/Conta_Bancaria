import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _cdi: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    cdi: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._cdi = cdi;
  }
  public get aniversario() {
    return this._cdi;
  }

  public set aniversario(cdi: number) {
    this._cdi = cdi;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("CDI: R$ 1725,25 " + this._cdi);
  }
}
