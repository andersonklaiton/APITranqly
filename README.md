# APITranqly

URL base da API https://tranqly.herokuapp.com/

## Rotas que não necessitam de autenticação

<h3 align='center'> Cadastro de usuário</h3>

`POST /users - para cadastro de cliente FORMATO DA REQUISIÇÃO `

```json

  {
	"type":"client",
	"image":"https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
	"name":"Mea Juda",
	"email":"meajuda@pofavo.com",
	"password":"123456"
}

```
Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lYWp1ZGFAcG9mYXZvLmNvbSIsImlhdCI6MTYzNjQ3OTMxOSwiZXhwIjoxNjM2NDgyOTE5LCJzdWIiOiIzIn0.fZ1u7emmLwoQB_Ur9EI5rXkpNBpMlhs3yoIvW7F7ipk",
  "user": {
    "email": "meajuda@pofavo.com",
    "type": "client",
    "image": "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
    "name": "Mea Juda",
    "id": 3
  }
}
```
`POST /users - para cadastro de profissional FORMATO DA REQUISIÇÃO `

```json
{
      "type": "professional",
      "image": "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
      "name": "Frederico Masomeno",
      "email": "frederico@masomeno.com",
      "password": "123456",
      "profession": "Psicologo",
      "areas": ["Traumas", "TEPT", "Relacionamentos"],
      "description": "Psicologo formado na Faculdade Imaginária de Natanlandiacom especialização em traumas e relacionamentos. Com experiência em muitos lugares loucos mano. Dattebayo.",
      "phone": "(99) 99999-9999",
      "gender": "masculino",
    }
```
Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
    "id": 1,
    "type": "professional",
    "image": "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
    "name": "Frederico Masomeno",
    "email": "frederico@masomeno.com",
    "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
    "profession": "Psicologo",
    "areas": [
      "Traumas",
      "TEPT",
      "Relacionamentos"
    ],
    "description": "Psicologo formado na Faculdade Imaginária de Natanlandiacom especialização em traumas e relacionamentos. Com experiência em muitos lugares loucos mano. Dattebayo.",
    "phone": "(99) 99999-9999",
    "gender": "masculino"
  }
```

<h3 align='center'> Login </h3>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
	"email":"frederico@masomeno.com",
	"password":"123456"
}

```
Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

Para profissional

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyZWRlcmljb0BtYXNvbWVuby5jb20iLCJpYXQiOjE2MzY1ODQ2OTYsImV4cCI6MTYzNjU4ODI5Niwic3ViIjoiMSJ9.4bS7_s9f3NKlVgF0NTHRLHaYOcFWsDXZjgQpZate1Ho",
  "user": {
    "id": 1,
    "type": "professional",
    "image": "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
    "name": "Frederico Masomeno",
    "email": "frederico@masomeno.com",
    "profession": "Psicologo",
    "areas": [
      "Traumas",
      "TEPT",
      "Relacionamentos"
    ],
    "description": "Psicologo formado na Faculdade Imaginária de Natanlandiacom especialização em traumas e relacionamentos. Com experiência em muitos lugares loucos mano. Dattebayo.",
    "phone": "(99) 99999-9999",
    "gender": "masculino"
  }
}
```
Para cliente

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvY29tQHByb2JlbWEuY29tIiwiaWF0IjoxNjM2NTg0ODc3LCJleHAiOjE2MzY1ODg0NzcsInN1YiI6IjIifQ.NxCWy_ENMjsayStnTfOGozfOHlC273d_NuORtppSxFQ",
  "user": {
    "id": 2,
    "type": "client",
    "image": "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
    "name": "Tocom Probema",
    "email": "tocom@probema.com"
  }
}
```
<h3 align='center'> Busca de horário disponível de um profissional </h3>

`GET /calendarProfessional?userId=1 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /calendarProfessional?userId=1 - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "userId": 1,
    "mon": [],
    "tue": [],
    "wed": [],
    "thu": [],
    "fri": [],
    "sat": []
  }
]
```
## Rotas que necessitam de autenticação

<h3 align='center'> Visualização de horarios agendados do próprio usuário </h3>

`GET /calendarUser?userId=2 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /calendarProfessional?userId=1 - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "userId": 2,
    "mon": [],
    "tue": [],
    "wed": [],
    "thu": [],
    "fri": [],
    "sat": []
  }
]
```

<h3 align='center'> Postar um comentário referente ao atendimento do profissional </h3>

`POST /coments - FORMATO DA REQUISIÇÃO`

```json
{
	"userId":2,
	"comment":"Me ajudou a me sentir melhor",
	"destinyId":1,
	"note":5
}
```
Caso dê tudo certo, a resposta será assim:

`POST /coments - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
  "userId": 2,
  "comment": "Me ajudou a me sentir melhor",
  "destinyId": 1,
  "note": 5,
}
```
<h3 align='center'> Ler um comentário referente ao profissional </h3>

`GET /coments?destinyId=1 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:

`GET /coments?destinyId=1 - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
{
    "userId": 2,
    "comment": "Me ajudou a me sentir melhor",
    "destinyId": 1,
    "note": 5,
    "id": 1
  }
```
<h3 align='center'> Atribuir uma nota ao atendimento do profissional </h3>

`POST /qualification - FORMATO DA REQUISIÇÃO`

```json
{
   "userId":2,
   "destinyId":1,
   "qualification":5
}
```
Caso dê tudo certo, a resposta será assim:

`POST /qualification - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
  "userId": 2,
  "destinyId": 1,
  "qualification": 5,
  "id": 1
}
```
<h3 align='center'> Visualizar nota do atendimento do profissional </h3>

`GET /qualification?destinyId=1 - FORMATO DA REQUISIÇÃO`

Caso dê tudo certo, a resposta será assim:
`GET /qualification?destinyId=1 - FORMATO DA REQUISIÇÃO - STATUS 200`

```json
[
  {
    "id": 1,
    "UserId": 2,
    "destinyId": 1,
    "qualification": 5
  }
]
```
