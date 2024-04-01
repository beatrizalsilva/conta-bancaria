import { Conta } from "../model/Conta"
import { ContaRepository } from "../repository/ContaRepository"

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>() //armazena os dados da conta
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)
        if(buscaConta != null) {
            buscaConta.visualizar()
        } else {
            console.log(`A conta némro: ${numero} não foi encontrada.`)
        }
    }

    listarTodas(): void {
        for(let conta of this.listaContas) {conta.visualizar()}
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta) 
        console.log(`\nA conta número: ` + conta.numero + ` foi criada com sucesso`)
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)
        if(buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log(`A conta número: ${conta.numero} foi atualizada com sucesso.`)
        } else {
            console.log(`A conta número: ${conta.numero} não foi encontrada.`)
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)
        if(buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(`A conta número ${numero} foi excluida com sucesso.`)
        } else {
            console.log(`A conta número ${numero} não foi encontrada`)
        }
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.")
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.")
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.")
    }

    // gerar automáticamente o número da conta (método auxiliar)
    public gerarNumero(): number {
        return ++ this.numero
    }

    // verifica a existência da conta
    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this.listaContas) {
            if(conta.numero === numero) {
                return conta
            }
        }
        return null
    }
}