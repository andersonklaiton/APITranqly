
# APITranqly

URL base da API https://tranqly.herokuapp.com/

## Rotas que não necessitam de autenticação

<h3 align='center'> Cadastro de usuário</h3>

`POST /users - para cadastro de profissional FORMATO DA REQUISIÇÃO `

```json
{
  "name": "Leonice Bandeira",
  "email": "mail1@gmail.com",
  "password": "123456",
  "gender": "Feminino",
  "profession": "Psicologo",
  "areas": "Traumas, TEPT e Relacionamentos",
  "description": "Psicóloga Clínica desde 2012 e consultora em Saúde e Educação Sexual. Extensa experiência com pacientes em estados depressivos, com transtornos de ansiedade, transtorno de estresse pós-traumático, vítimas de violência sexual e doméstica e com problemas na esfera sexual.",
  "type": "professional"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lYWp1ZGFAcG9mYXZvLmNvbSIsImlhdCI6MTYzNjQ3OTMxOSwiZXhwIjoxNjM2NDgyOTE5LCJzdWIiOiIzIn0.fZ1u7emmLwoQB_Ur9EI5rXkpNBpMlhs3yoIvW7F7ipk",
  "user": {
    "name": "Leonice Bandeira",
    "email": "mail1@gmail.com",
    "password": "$2a$10$u6HH6eUZKraYmPlnHmmsKuFN24LB3jnswW30iytPOvIp6G5MAdOKC",
    "gender": "Feminino",
    "profession": "Psicologo",
    "areas": "Traumas, TEPT e Relacionamentos",
    "description": "Psicóloga Clínica desde 2012 e consultora em Saúde e Educação Sexual. Extensa experiência com pacientes em estados depressivos, com transtornos de ansiedade, transtorno de estresse pós-traumático, vítimas de violência sexual e doméstica e com problemas na esfera sexual.",
    "type": "professional",
    "id": 1
  }
}
```

`POST /users - para cadastro de clientes FORMATO DA REQUISIÇÃO `

```json
{
  "name": "Anderson Klaiton",
  "email": "anderson@gmail.com",
  "password": "123456",
  "type": "client"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lYWp1ZGFAcG9mYXZvLmNvbSIsImlhdCI6MTYzNjQ3OTMxOSwiZXhwIjoxNjM2NDgyOTE5LCJzdWIiOiIzIn0.fZ1u7emmLwoQB_Ur9EI5rXkpNBpMlhs3yoIvW7F7ipk",
  "user": {
    "name": "Anderson Klaiton",
    "email": "anderson@gmail.com",
    "password": "123456",
    "type": "client"
  }
}
```

<h3 align='center'> Login </h3>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "anderson@gmail.com",
  "password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

Para profissional

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWwxQGdtYWlsLmNvbSIsImlhdCI6MTYzNzE1NjEyNiwiZXhwIjoxNjM3MTU5NzI2LCJzdWIiOiIxIn0.fjoOJ0syyqa8n0ZS4dvU9IH9aKMwl6lWsUpXJ9P5s2Y",
  "user": {
    "id": 1,
    "type": "professional",
    "image": "https://i.ibb.co/xSzr2x6/Sample.png",
    "name": "Leonice Bandeira",
    "email": "mail1@gmail.com",
    "profession": "Psicologo",
    "areas": "Traumas, TEPT e Relacionamentos",
    "description": "Psicóloga Clínica desde 2012 e consultora em Saúde e Educação Sexual. Extensa experiência com pacientes em estados depressivos, com transtornos de ansiedade, transtorno de estresse pós-traumático, vítimas de violência sexual e doméstica e com problemas na esfera sexual.",
    "gender": "Feminino",
    "price": 60,
    "language": "Português || Inglês",
    "state": "Paraná",
    "crp": "00/000001"
  }
}
```

Para cliente

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGVyc29uQGdtYWlsLmNvbSIsImlhdCI6MTYzNzE1NTgxNywiZXhwIjoxNjM3MTU5NDE3LCJzdWIiOiIxMSJ9.dzWMjwKXMOfSRhraz83um-zmN2NA8CfZ36wnDj6P03c",
  "user": {
    "id": 11,
    "type": "client",
    "image": "https://ca.slack-edge.com/TQZR39SET-U021MHSRNHK-988a68fd0871-512",
    "name": "Anderson Klaiton",
    "email": "anderson@gmail.com"
  }
}
```

## Rotas que necessitam de autenticação

<h3 align='center'> Busca de horário disponível de um profissional </h3>

`GET /users/1/professional - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /users/1/professional - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": 1,
    "userId": 1,
    "type": true,
    "date": "2021-11-15T20:58:21-03:00"
  }
]
```

<h3 align='center'> Agendar um horário com especialista</h3>

`POST /patient - FORMATO DA REQUISIÇÃO`

```json
{
    "userId": 1,
    "type": false,
    "date": "2021-11-29T23:58:22-03:00",
    "patientId": 11,
    "cancel": "true"
  }
```

Caso dê tudo certo, a resposta será assim:

`POST /patient - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 16,
  "userId": 1,
  "type": false,
  "date": "2021-11-29T23:58:22-03:00",
  "patientId": 11,
  "cancel": "true"
}
```

<h3 align='center'> Visualização de horarios agendados do próprio usuário </h3>

`GET /patient?patientId=1 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /patient?patientId=11 - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "patientId": 11,
    "type": false,
    "userId": 1,
    "date": "2021-11-19T20:57:21-03:00",
    "cancel": false,
    "areas": "Traumas, TEPT e Relacionamentos",
    "name": "Leonice Bandeira",
    "comment": "",
    "id": 15
  }
]
```

<h3 align='center'>Cancelar horário agendado do pŕoprio usuário </h3>

`PATCH /patient/15 - FORMATO DA REQUISIÇÃO`

```json
{
	"cancel":true
}
```
Caso dê tudo certo a resposta será assim:

`PATCH /patient/15 - FORMATO DA RESPOSTA - 200`

```json
{
  "patientId": 11,
  "type": false,
  "userId": 1,
  "date": "2021-11-27T23:58:22-03:00",
  "cancel": true,
  "areas": "Traumas, TEPT e Relacionamentos",
  "name": "Leonice Bandeira",
  "comment": "",
  "id": 15
}
```

<h3 align='center'> Postar um comentário referente ao atendimento do profissional </h3>

`POST /comments - FORMATO DA REQUISIÇÃO`

```json
{
  "namePatient": "Fabiola",
  "comment": "A Leonice vai escutar cada pedacinho da tua história e te ajudar a fazer conexões que você nunca tinha reparado. É uma profissional excelente e garanto que é uma excelente escolha pra qualquer um que busque auto-aperfeiçoamento.!",
  "patientId": 11,
  "professionalId": 1,
  "score": 5
}
```

Caso dê tudo certo, a resposta será assim:

`POST /coments - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "namePatient": "Fabiola",
  "comment": "A Leonice vai escutar cada pedacinho da tua história e te ajudar a fazer conexões que você nunca tinha reparado. É uma profissional excelente e garanto que é uma excelente escolha pra qualquer um que busque auto-aperfeiçoamento.!",
  "id": 1,
  "patientId": 11,
  "professionalId": 1,
  "score": 5
}
```

<h3 align='center'> Ler um comentário referente ao profissional </h3>

`GET /coments?destinyId=1 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /coments?destinyId=1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "namePatient": "Fabiola",
  "comment": "A Leonice vai escutar cada pedacinho da tua história e te ajudar a fazer conexões que você nunca tinha reparado. É uma profissional excelente e garanto que é uma excelente escolha pra qualquer um que busque auto-aperfeiçoamento.!",
  "id": 1,
  "patientId": 11,
  "professionalId": 1,
  "score": 5
}
```
<h3 align='center'> Postar um comentário referente a pagina </h3>

`POST /commentsPage - FORMATO DA REQUISIÇÃO`

```json
{
      "namePatient": "Fernando",
      "comment": "Utilizar o Tranqyl me ajudou nesse tempo de quarentena, conversar com alguém que sabe te ajudar e sabe o que você está passando é a melhor coisa. E fazer isso online também me ajudou, pois possibilitou eu ter ajuda rápida.",
      "id": 1,
      "score": 5
}
```

Caso dê tudo certo a resposta será assim:

`POST /commentsPage - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "namePatient": "Monalisa",
  "comment": "teste para atualizar estrelas",
  "patientId": 2,
  "score": 1,
  "id": 7
}
```

<h3 align='center'> Ler um comentário referente a pagina </h3>

`GET /commentsPage - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /commentsPage - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    {
      "namePatient": "Fabiola",
      "comment": "Me sinto mais acolhida com o psicólogo do Tranqly do que o que eu tinha antes. Achei fácil escolher a linha de abordagem ideal, não tenho mais gasto nem preocupação com transporte. É muito mais confortável e mais econômico.",
      "id":2
      "score": 5
    },
}
```
<h3 align='center'>Acrescentar horário para atendimentos - profissional</h3>

`PATCH /professional/1 - FORMATO DA REQUISIÇÃO`

```json
{
      "userId": 2,
      "type": true,
      "date": "2021-11-16T20:57:21-07:00"
}
```

Caso dê tudo certo a resposta será assim:

`PATCH /professional/1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": 1,
  "userId": 2,
  "type": true,
  "date": "2021-11-16T20:57:21-07:00"
}
```

<h3 align='center'>Atualizar dados cadastrais</h3>

`PATCH /users/11 - FORMTATO DA REQUISIÇÃO`

```json
{
	"email":"klaiton@gmail.com",
	"name":"Anderson Silva"
}
```

Caso dê tudo cerro a resposta será assim:

`PATCH /users/11 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": 11,
  "type": "client",
  "image": "https://ca.slack-edge.com/TQZR39SET-U021MHSRNHK-988a68fd0871-512",
  "name": "Anderson Silva",
  "email": "klaiton@gmail.com",
  "password": "$2a$10$mEy/cYN2TIgJ2UU0hfWX5uFa.XY16ezD8DzFhoiCUUHhRyl6FqGFO"
}
```

