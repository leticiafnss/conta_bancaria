import { Conta } from "../model/Conta";
import { ContaRepository } from "../Repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
    [x: string]: any;
    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    atualizar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero, + 
             " foi criada com sucesso!" , colors.reset);
    
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
    
}


 