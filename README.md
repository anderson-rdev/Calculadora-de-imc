# Calculadora de IMC

Este projeto consiste em uma calculadora de IMC (Índice de Massa Corporal) desenvolvida para receber dados do usuário, calcular o IMC e informar sua classificação de acordo com a tabela padrão para adultos.

## Funcionalidades

* Solicita ao usuário:

  * Altura (em metros)
  * Peso (em kg)

* Calcula o IMC utilizando a fórmula:

  ```
  imc = peso / (altura * altura)
  ```

* Exibe o resultado do IMC

* Informa a classificação correspondente

## Classificação do IMC

| IMC            | Classificação                |
| -------------- | ---------------------------- |
| Menor que 18,5 | Abaixo do peso               |
| 18,5 a 24,9    | Peso normal                  |
| 25 a 29,9      | Sobrepeso                    |
| 30 a 34,9      | Obesidade grau I             |
| 35 a 39,9      | Obesidade grau II            |
| Maior que 40   | Obesidade grau III (mórbida) |

```

## Estrutura básica

* `altura`: variável que armazena a altura do usuário
* `peso`: variável que armazena o peso do usuário
* `imc`: variável que guarda o resultado do cálculo

## Possíveis melhorias

* Validação de dados de entrada
* Interface gráfica
* Histórico de cálculos
* Sugestões de saúde com base no resultado
