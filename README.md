# Escrevendo as classes de um Jogo

Solução em JavaScript para o desafio de lógica de programação da DIO.

A classe `Heroi` possui as propriedades `nome`, `idade` e `tipo`. O método
`atacar()` escolhe o ataque conforme o tipo do herói e exibe a mensagem no console.
Tipos não reconhecidos geram um erro.

## Como executar

Com o Node.js instalado, execute na pasta do projeto:

```bash
node index.js
```

## Saída esperada

```text
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## Conceitos utilizados

- Variáveis: `ataque`, `herois` e `indice`.
- Operadores: atribuição (`=`), comparação (`<`) e incremento (`++`).
- Laço de repetição: `for` para percorrer os heróis.
- Estrutura de decisão: `switch` para selecionar o ataque.
- Funções: construtor e método `atacar()`.
- Classes e objetos: classe `Heroi` e instâncias criadas com `new`.

Para experimentar, altere os nomes, idades e tipos dos objetos no array `herois`.
