import readlinesync = require("readline-sync")
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { ContaController } from "./src/controller/ContaController"

export function main() {
    let contas: ContaController = new ContaController() //instância da classe conta controller

    // variáveis auxiliar
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string
    const tiposContas = ["Conta corrente", "Conta Poupanca"]

    while(true) {
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("                Banco do Brazil com Z                ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("          1 - Criar conta                            ")
        console.log("          2 - Listar todas as contas                 ")
        console.log("          3 - Buscar conta por número                ")
        console.log("          4 - Atualizar dados da conta               ")
        console.log("          5 - Apagar conta                           ")
        console.log("          6 - Saque                                  ")
        console.log("          7 - Depositar                              ")
        console.log("          8 - Transferir valor entre contas          ")
        console.log("          9 - Buscar conta por titular               ")
        console.log("          0 - Sair                                   ")
        console.log("                                                     ")
        console.log("*****************************************************")

        console.log("Entre com a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if(opcao == 0) {
            console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!")
            about()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nCriar conta")
                console.log(`Digite o número da agência: `) 
                agencia = readlinesync.questionInt("")
                console.log(`Digite o nome do titular: `) 
                titular = readlinesync.question("")
                console.log(`Digite o tipo da conta: `) 
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1
                console.log(`Digite o saldo da conta (R$): `) 
                saldo = readlinesync.questionFloat("")

                switch(tipo) {
                    case 1:
                        console.log(`Digite o limite da conta (R$): `) 
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break
                    case 2:
                        console.log(`Digite o dia do aniversário da poupança: `) 
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break
                }  
                keyPress()
                break
            case 2:
                console.log("\nListar todas as contas")
                contas.listarTodas()
                keyPress()
                break
            case 3:
                console.log("\nBuscar conta por número")
                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")
                contas.procurarPorNumero(numero)
                keyPress()
                break
            case 4:
                console.log("\nAtualizar dados da conta")
                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)
                if(conta != null) {
                    console.log("Digite o número da agência: ")
                    agencia = readlinesync.questionInt("")
                    console.log("Digite o nome do titular: ")
                    titular = readlinesync.question("")
                    tipo = conta.tipo
                    console.log("Digite o saldo da conta (R$): ")
                    saldo = readlinesync.questionFloat("")

                    switch(tipo) {
                        case 1:
                            console.log(`Digite o limite da conta (R$): `) 
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break
                        case 2:
                            console.log(`Digite o dia do aniversário da poupança: `) 
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break
                    }  
                } else {
                    console.log(`A conta número: ${numero} não foi encontrada`)
                }
                keyPress()
                break
            case 5:
                console.log("\nApagar conta")
                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")
                contas.deletar(numero)
                keyPress()
                break
            case 6: 
                console.log("\nSaque")

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")
                console.log("Digite o valor do saque (R$): ")
                valor = readlinesync.questionFloat("")
                contas.sacar(numero, valor)
                keyPress()
                break
            case 7: 
                console.log("\nDepósito")

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")
                console.log("Digite o valor do depósito (R$): ")
                valor = readlinesync.questionFloat("")
                contas.depositar(numero, valor)
                keyPress()
                break
            case 8:
                console.log("\nTransferência entre contas")

                console.log("Digite o número da conta de origem: ")
                numero = readlinesync.questionInt("")
                console.log("Digite o número da conta de destino: ")
                numeroDestino = readlinesync.questionInt("")
                console.log("Digite o valor do depósito (R$): ")
                valor = readlinesync.questionFloat("")
                contas.transferir(numero, numeroDestino, valor)
                keyPress()
                break
            case 9: 
                console.log("\nBuscar conta por titular")
                console.log("Digite o Nome do titular: ")
                titular = readlinesync.question("")
                contas.procurarPorTitular(titular)
                keyPress()
                break
            default:
                console.log("\nOpção inválida!")
                keyPress()
                break
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt()
}

function about(): void {
    console.log(`Projeto desenvolvido por: Beatriz Alves \ngithub.com/beatrizalsilva`)
}

main()