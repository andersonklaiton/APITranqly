# APITranqly

Post /login para logar

```json
{
	"email":"frederico@masomeno.com",
	"password":"123456"
}

```

Post /users para cadastrar cliente

```json

  {
	"type":"client",
	"image":"https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg",
	"name":"Mea Juda",
	"email":"meajuda@pofavo.com",
	"password":"123456"
}

```

Post /users para cadastar profissional
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
Get /calendarUser?userId={idDoUsuario}

Somente renderiza o calendario do usuário logado

Get /calendarProfissional?userId={idDoProfissional}

Renderiza o calendario do profissional procurado

Post /coments para cadastrar um comentário para o profissinal
```json
{
	"userId":IdDoUsuario,
	"comment":"Mea Judou",
	"destinyId":IdDOProfissional,
	"note":5
}
```
Get /coments?destinyId=IdDoProfissional para ler os comentarios referente ao profissional
