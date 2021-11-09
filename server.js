const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users:600, 
  calendarUser:660, /*usuário/paciente precisa estar logado para ler e editar seu calendário*/
  calendarProfessional:664, /*usuário/paciente precisa estar logado para agendar um horario com o profissional, todos podem visualizar o calendário*/
  coments:644,
  qualification:644
  
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);