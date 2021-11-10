const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users:600, 
  calendarUser:660, 
  calendarProfessional:664, 
  coments:644,
  qualification:644
  
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);