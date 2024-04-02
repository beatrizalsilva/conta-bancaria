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
            console.log(`A conta número ${numero} não foi encontrada.`)
        }
    }

    listarTodas(): void {
        for(let conta of this.listaContas) {conta.visualizar()}
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta) 
        console.log(`A conta número ${conta.numero} foi criada com sucesso.`)
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)
        if(buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log(`A conta número ${conta.numero} foi atualizada com sucesso.`)
        } else {
            console.log(`A conta número ${conta.numero} não foi encontrada.`)
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

    // métodos bancários
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)
        if(conta != null) {
            if(conta.sacar(valor) == true) {
                console.log(`O saque na conta ${numero} foi efetuado com sucesso`)
            }
        } else {
            console.log(`A conta número ${numero} não foi encontrada.`)
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)
        if(conta != null) {
            conta.depositar(valor)
            console.log(`O depósito na conta número ${numero} foi efetuado com sucesso.`)
        } else {
            console.log(`A conta número ${numero} não foi encontrada.`)
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem)
        let contaDestino = this.buscarNoArray(numeroDestino)
        if(contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor)
                console.log(`A transferência da conta número ${numeroOrigem} para a conta número ${numeroDestino} foi efetuada com sucesso.`)
            }
        } else {
            console.log(`A conta número ${numeroOrigem} e/ou a conta número ${numeroDestino} não foram encontradas.`)
        }
    }

    // gerar automáticamente o número da conta (método auxiliar)
    public gerarNumero(): number {
        return ++ this.numero
    }

    // verifica a existência da conta
    public buscarNoArray(Number: number): Conta | null {
        for(let conta of this.listaContas) {
            if(conta.numero === Number) {
                return conta
            }
        }
        return null
    }
}