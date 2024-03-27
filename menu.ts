import readlinesync = require("readline-sync")
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"

export function main() {
    let opcao: number
    
    // teste para visualizar conta 
    const cliente1: Conta = new Conta(1, 123, 1, "João da Silva", 1000)
    cliente1.sacar(1500)
    cliente1.visualizar()

    const cliente2: ContaCorrente = new ContaCorrente(2, 456, 1, "Laura Gonçalves", 13000, 1000)
    cliente2.visualizar()

    const cliente3: ContaCorrente = new ContaCorrente(3, 789, 2, "Oliver Queen", 2000000000 , 5000)
    cliente3.depositar(5000)
    cliente3.visualizar()

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
        console.log("          9 - Sair                                   ")
        console.log("                                                     ")
        console.log("*****************************************************")

        console.log("Entre com a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if(opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!")
            about()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nCriar conta")
                keyPress()
                break
            case 2:
                console.log("\nListar todas as contas")
                keyPress()
                break
            case 3:
                console.log("\nBuscar conta por número")
                keyPress()
                break
            case 4:
                console.log("\nAtualizar dados da conta")
                keyPress()
                break
            case 5:
                console.log("\nApagar conta")
                keyPress()
                break
            case 6: 
                console.log("\nSaque")
                keyPress()
                break
            case 7: 
                console.log("\nDepósito")
                keyPress()
                break
            case 8:
                console.log("\nTransferência entre contas")
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
}

function about(): void {
    console.log(`Projeto desenvolvido por: Beatriz Alves \nGeneration Brasil \ngithub.com/beatrizalsilva`)
}

main()