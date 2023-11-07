# Desafio Live Code - NeoPro

## Descrição
Neste projeto encontra-se o desafio proposto pela NeoPro.
Consiste em criar 2 endpoints.
O primeiro deve pegar os dados de uma api, organizar os objetos e salvar em um banco de dados MongoDB utilizando mongoose.
O segundo deve recuperar os dados do banco de dados, organizar os objetos e retornar no response.

### Etapas
- Criar o primeiro endpoint que recebe uma data via método GET
- Fazer uma request para [api neopro](https://api.neopro.com.br/v1/test/sales?month=2022-09-01T00:00:00.000Z) passando a data como parâmetro
- A api irá retornar o seguinte objeto:

```json
[
  {
    "date": "2023-11-01T11:00:00.000Z",
    "seller": "Giovanna",
    "sold": 889
  }, {
    "date": "2023-11-01T11:00:00.000Z",
    "seller": "Giovanna",
    "sold": 767
  }, {
    "date": "2023-11-02T11:00:00.000Z",
    "seller": "Giovanna",
    "sold": 957
  }, {
    "date": "2023-11-01T11:00:00.000Z",
    "seller": "Afonso",
    "sold": 751
  }, {
    "date": "2023-11-01T11:00:00.000Z",
    "seller": "Mariana",
    "sold": 809
  }
]
```

- Organizar o objetos, agrupando pelo dia e por vendedores, somando os valores vendidos do vendedor e adicionar um novo campo chamado "sales", contendo a quantidade de vendas, exemplo abaixo:

```json
[
  {
    "date": "2023-11-01T11:00:00.000Z ",
    "seller": "Giovanna",
    "sold": 1656,
    "sales": 2
  }, {
    "date": "2023-11-02T11:00:00.000Z ",
    "seller": "Giovanna",
    "sold": 957,
    "sales": 1
  }, {
    "date": "2023-11-01T11:00:00.000Z ",
    "seller": "Afonso",
    "sold": 751,
    "sales": 1
  }, {
    "date": "2023-11-01T11:00:00.000Z ",
    "seller": "Mariana",
    "sold": 809,
    "sales": 1
  }
]
```

- Armazenar os dados em um banco de dados MongoDB
- Criar o segundo endpoint que recebe uma data via método GET
- Buscar os dados do banco de dados, no periodo do mes conforme a data
- Organizar por dia e retornar os dados no response, conforme o exemplo abaixo:

```json
[
  {
    "date": "2023-11-01T11:00:00.000Z ",
    "sellers": [
      {
        "seller": "Giovanna",
        "sold": 1656,
        "sales": 2
      }, {
        "seller": "Afonso",
        "sold": 751,
        "sales": 1
      }, {
        "seller": "Mariana",
        "sold": 809,
        "sales": 1
      }
    ]
  }
]
```

### Instalar dependências
```bash
# Yarn
$ yarn install

# Npm
$ npm install
```

### Variáveis de ambiente
```bash
$ cp .env.sample .env
```

### Rodando o projeto
```bash
# Development
$ npm run start:dev

# Production
$ npm run start
```

### Testes
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
