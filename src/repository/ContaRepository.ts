import { Conta } from "../model/Conta";



export interface ContaRepository {
    // CRUD da Conta
	
    procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(conta: Conta): void;
	deletar(numero: number): void;
	
	// Métodos Bancários
	sacar(numero: number, valor: number): void;
	depositar(numero: number, valor: number): void;
	transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
	
}



/*Linhas 6 a 10: Criamos as assinaturas dos 5 Métodos do CRUD 
(criar, listar todas, consultar pelo numero, atualizar e deletar)
,da Classe Conta. Estes Métodos serão implementados na Classe ContaController, 
que será implementada nas próximas Tarefas do Projeto Conta Bancária.*/

/*Linhas 13 a 15: Criamos as assinaturas dos 3 Métodos de Operações Bancárias 
(sacar, sepositar e transferir), da Classe Conta. Estes Métodos também serão implementados
 na Classe ContaController, que será implementada nas próximas Tarefas do Projeto Conta Bancária */