
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

const port = 4444;

const router = express.Router();

const _contacts = [
  {
    "id": 121,
    "email": "bruce.wayne@batman.com",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "role": "Super Hero",
    "organization": "Wayne Enterprise",
    "phone": "555-5555",
    "status": true
    
  },
  {
    "id": 122,
    "email": "clark.kent@superman.com",
    "firstName": "Clark",
    "lastName": "Kent",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
   
  },
  {
    "id": 123,
    "email": "lex.luthor@evil.com",
    "firstName": "Lex",
    "lastName": "Luthor",
    "role": "Super Villain",
    "organization": "LexCorp",
    "phone": "555-5555",
    "status": true
   
  },
  {
    "id": 124,
    "email": "barry.allen@flash.com",
    "firstName": "Barry",
    "lastName": "Allen",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
    
  },
  {
    "id": 125,
    "email": "hal.jordan@greenlantern.com",
    "firstName": "Hal",
    "lastName": "Jordan",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
   
  },
  {
    "id": 126,
    "email": "diana.prince@wonderwoman.com",
    "firstName": "Diana",
    "lastName": "Prince",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
   
  },
  {
    "id": 127,
    "email": "victor.stone@cyborg.com",
    "firstName": "Victor",
    "lastName": "Stone",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
    
  },
  {
    "id": 128,
    "email": "arthur.curry@auqaman.com",
    "firstName": "Arthur",
    "lastName": "Curry",
    "role": "Super Hero",
    "organization": "Justice League",
    "phone": "555-5555",
    "status": true
   
  },
];

router.get("/contacts", (req, res) => {
  const perPage = 4;
  const page = +req.query.page;
  const contactsLength = _contacts.length;
  console.log("GET /contacts", "page:", page);
  const filteredContacts = _contacts.filter((c, i) => (page >= 2) ? i >= 4 : i < 4);

  const contacts = filteredContacts;
  res.json({contacts});
});

router.get("/contact", (req, res) => {
  const id = +req.query.id;
  console.log("GET /contact", "id:", id);
  const contact = _contacts.filter(t => t.id === id)[0];
  res.json({contact});
});

router.post("/status", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  console.log("POST  /status", "id:", id, "status:", status);
  const contact = _contacts.filter(t => t.id === id)[0];
  contact.status = status;
  res.json({status: 'OK'});
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(port);

console.log(`Server port: ${port}`);