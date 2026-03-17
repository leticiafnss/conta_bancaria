import { Conta } from "../model/Conta";
import { ContaRepository } from "../Repository/ContaRepository";

export class ContaController implements ContaRepository {

 private listarContas: Array<Conta> = new Array<Conta>();
 numero: number = 0;

 procurarPorNumero(numero: number): void {
 let buscaConta = this.buscarNoArray(numero);

 if (buscaConta != null) {
 buscaConta.visualizar();
 } else {
 console.log(`\nA conta número: ${numero} não foi encontrada!`);
 }
 }

 listarTodos(): void {
 for (let conta of this.listarContas) {
 conta.visualizar();
 }
 }

 cadastrar(conta: Conta): void {
 this.listarContas.push(conta);
 console.log(`\nA Conta Número: ${conta.numero} foi criada com sucesso!`);
 }

 atualizar(conta: Conta): void {
 let buscaConta = this.buscarNoArray(conta.numero);

 if (buscaConta != null) {
 this.listarContas[this.listarContas.indexOf(buscaConta)] = conta;
 console.log(`\nA Conta número: ${conta.numero} foi atualizada com sucesso!`);
 } else {
 console.log(`\nA conta número: ${conta.numero} não foi encontrada!`);
 }
 }

 deletar(numero: number): void {
 let buscaConta = this.buscarNoArray(numero);

 if (buscaConta != null) {
 this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1);
 console.log(`\nA conta número: ${numero} foi apagada com sucesso!`);
 } else {
 console.log(`\nA conta número: ${numero} não foi encontrada!`);
 }
 }

 sacar(numero: number, valor: number): void {
 let conta = this.buscarNoArray(numero);

 if (conta != null) {
 if (conta.sacar(valor) == true)
 console.log(`\nO saque na conta número ${numero} foi efetuado com sucesso!`);
 } else {
 console.log(`\nA conta número ${numero} não foi encontrada!`);
 }
 }

 depositar(numero: number, valor: number): void {
 let conta = this.buscarNoArray(numero);

 if (conta != null) {
 conta.depositar(valor);
 console.log(`\nO depósito na conta número ${numero} foi efetuado com sucesso!`);
 } else {
 console.log(`\nA conta número ${numero} não foi encontrada!`);
 }
 }

 transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
 let contaOrigem = this.buscarNoArray(numeroOrigem);
 let contaDestino = this.buscarNoArray(numeroDestino);

 if (contaOrigem != null && contaDestino != null) {

 if (contaOrigem.sacar(valor) == true) {
 contaDestino.depositar(valor);

 console.log(`\nA transferência da conta número ${numeroOrigem} para a conta número ${numeroDestino} foi efetuada com sucesso!`);
 }

 } else {
 console.log(`\nA conta número ${numeroOrigem} e/ou a conta número ${numeroDestino} não foram encontradas!`);
 }
 }

 listarTodas(): void {
 for (let conta of this.listarContas) {
 conta.visualizar();
 }
 }

 public gerarNumero(): number {
 return ++this.numero;
 }

 public buscarNoArray(numero: number): Conta | null {

 for (let conta of this.listarContas) {
 if (conta.numero === numero)
 return conta;
 }

 return null;
 }
}