import * as readlineSync from "readline-sync"
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/Controller/ContaController";

export function main() {

 let contas: ContaController = new ContaController();

 let opcao: number;
 let numero: number;
 let agencia: number;
 let tipo: number;
 let saldo: number;
 let limite: number;
 let aniversario: number;
 let valor: number;
 let numeroDestino: number;
 let titular: string;

 const tiposContas = ["Conta Corrente", "Conta Poupança"];

 console.log("\nCriar Contas\n");

 let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100);
 contas.cadastrar(cc1);

 let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100);
 contas.cadastrar(cc2);

 let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
 contas.cadastrar(cp1);

 let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
 contas.cadastrar(cp2);

 contas.listarTodas();

 while (true) {

 console.log("**************************")
 console.log(" Banco do BRAZIL COM Z ")
 console.log("**************************")

 console.log("1 - Criar conta")
 console.log("2 - Listar todas as Contas")
 console.log("3 - Buscar Conta por Número")
 console.log("4 - Atualizar Dados da Conta")
 console.log("5 - Apagar conta")
 console.log("6 - Sacar")
 console.log("7 - Depositar")
 console.log("8 - Transferir valores entre contas")
 console.log("9 - Sair")

 console.log("Digite a opção desejada: ")
 opcao = readlineSync.questionInt("")

 if (opcao == 9) {
 console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
 sobre();
 process.exit(0);
 }

 switch (opcao) {

 case 1:

 console.log("\nCriar conta\n");

 console.log("Número da agência: ");
 agencia = readlineSync.questionInt("");

 console.log("Nome do titular: ");
 titular = readlineSync.question("");

 tipo = readlineSync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

 console.log("Saldo da conta: ");
 saldo = readlineSync.questionFloat("");

 switch (tipo) {

 case 1:
 console.log("Limite da conta: ");
 limite = readlineSync.questionFloat("");

 contas.cadastrar(
 new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
 );
 break;

 case 2:
 console.log("Dia do aniversário da conta poupança: ");
 aniversario = readlineSync.questionInt("");

 contas.cadastrar(
 new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
 );
 break;
 }

 break;

 case 2:

 console.log("\nListar todas as contas\n");
 contas.listarTodas();

 break;

 case 3:

 console.log("Número da conta: ");
 numero = readlineSync.questionInt("");

 contas.procurarPorNumero(numero);

 break;

 case 4:

 console.log("Número da conta: ");
 numero = readlineSync.questionInt("");

 let conta = contas.buscarNoArray(numero);

 if (conta != null) {

 console.log("Agência: ");
 agencia = readlineSync.questionInt("");

 console.log("Titular: ");
 titular = readlineSync.question("");

 tipo = conta.tipo;

 console.log("Saldo: ");
 saldo = readlineSync.questionFloat("");

 switch (tipo) {

 case 1:

 console.log("Limite: ");
 limite = readlineSync.questionFloat("");

 contas.atualizar(
 new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
 );

 break;

 case 2:

 console.log("Aniversário: ");
 aniversario = readlineSync.questionInt("");

 contas.atualizar(
 new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
 );

 break;

 }

 } else {

 console.log(`A conta número ${numero} não foi encontrada`);

 }

 break;

 case 5:

 console.log("Número da conta: ");
 numero = readlineSync.questionInt("");

 contas.deletar(numero);

 break;

 case 6:

 console.log("Número da conta: ");
 numero = readlineSync.questionInt("");

 console.log("Valor do saque: ");
 valor = readlineSync.questionFloat("");

 contas.sacar(numero, valor);

 break;

 case 7:

 console.log("Número da conta: ");
 numero = readlineSync.questionInt("");

 console.log("Valor do depósito: ");
 valor = readlineSync.questionFloat("");

 contas.depositar(numero, valor);

 break;

 case 8:

 console.log("Conta origem: ");
 numero = readlineSync.questionInt("");

 console.log("Conta destino: ");
 numeroDestino = readlineSync.questionInt("");

 console.log("Valor: ");
 valor = readlineSync.questionFloat("");

 contas.transferir(numero, numeroDestino, valor);

 break;

 default:

 console.log("Opção inválida");

 }

 }

}

function sobre(): void {

 console.log("\nProjeto desenvolvido para estudo de TypeScript - Generation Brasil");

}

main();
