import readlinesync = require("readline-sync")

export function main() {
    let opcao: number

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
        console.log("                                                     ")

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
                break
            case 2:
                console.log("\nListar todas as contas")
                break
            case 3:
                console.log("\nBuscar conta por número")
                break
            case 4:
                console.log("\nAtualizar dados da conta")
                break
            case 5:
                console.log("\nApagar conta")
                break
            case 6: 
                console.log("\nSaque")
                break
            case 7: 
                console.log("\nDepósito")
                break
            case 8:
                console.log("\nTransferência entre contas")
                break
            default:
                console.log("\nOpção inválida!")
                break
        }
    }
}

function about() {
    console.log(`Projeto desenvolvido por: Beatriz \nGeneration Brasil \github.com/beatrizalsilva`)
}

main()