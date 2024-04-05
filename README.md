# Conta Bancária
Este é um projeto que simula uma aplicação bancária, desenvolvido com o objetivo de praticar os conceitos fundamentais do TypeScript e da Programação Orientada a Objetos (POO). Sendo assim, o projeto <strong>Banco do Brazil com Z</strong> é uma aplicação de terminal que simula o funcionamento de um sistema bancário básico. Ele permite a criação, gerenciamento e operações básicas em contas correntes e poupanças.

## Funcionalidades
- Criar, atualizar e apagar uma conta.
- Verificar saldo.
- Deposito, saque e transferência.
- Listagem de contas exixtentes.
- Consultar conta por número e titular.

## Tecnologias
- TypeScript
- Node.JS
- Pacote readline-sync
- Git

## Como usar
1. Clone o repositório:
```
git clone https://github.com/beatrizalsilva/conta-bancaria.git
```

2. Para entrada de dados, utilize o readline-sync:
```
// pacote com as definições do Node
npm install @types/node

// definições para o TypeScript
npm install --save-dev @types/readline-sync
```

3. Após a instalação, teste as funcionalidades pela classe Menu.
* Caso você não tenha o `Code Run` (extensão VS Code) instalado, através do terminal você pode execultar o arquivo Menu.ts com o seguinte comando:
```
ts-node Menu.ts
``` 

## Demonstração
![Demonstração da API rodando na classe Menu.](./src/preview/demonstração%20conta-bancaria.gif)

## Conclusão
Esse foi um projeto realizado no BootCamp da Generation para solidificar o aprendizado do bloco 1, onde iniciamos com JavaScript, TypeScript e POO. Ele demonstra conceitos como classes, heranças, interface, polimorfismo e abstração.

Este projeto me proporcionou um conhecimento mais amplo das funcionalidades do JS, pois já havia começado a estudar mas para parte de frontend, e essa junção com TypeScript trouxe um grande impacto no meu entendimento, trazendo uma projeção do quanto eu sei, do que eu preciso melhorar e outros conhecimento que posso buscar para me auxiliar. Confesso que o POO não foi muito amigável de primeira e ainda me sinto um pouco confusa com algumas terminologias, mas vi que com ele podemos modular onbjetos do mundo real com mais facilidade, deixando um código um pouco menos verboso, que nos permite uma fácil manutenção e reciclagem.

Desejo poder fazer algumas melhorias conforme for estudando e aprendendo novas técnicas, aceito sugestão para melhorias também. Obrigada por conferirem meu primeiro projeto backend, e espero que essa aplicação possa ajudar algúem.