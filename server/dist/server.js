"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 4444;
var router = express.Router();
var _listItems = [
    {
        "id": 111,
        "type": "phone",
        "color": "black",
        "description": "The display employs new techniques and technology to precisely follow the curves of the design, all the way to the elegantly rounded corners.",
        "yourRating": null,
        "rating": 9.1
    },
    {
        "id": 112,
        "type": "tablet",
        "color": "white",
        "description": "64-bit architecture. Four-core design. Over 3.3 billion transistors. Translation: iPad is incredibly fast. Which comes in handy when you want to edit a 4K video, play graphics-intensive games, or experience the latest augmented reality apps.",
        "yourRating": null,
        "rating": 8.5
    },
    {
        "id": 113,
        "type": "watch",
        "color": "black",
        "description": "Take a call when you’re out on the water. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.",
        "yourRating": null,
        "rating": 8.2
    }
];
var _contacts = [
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
    }
];
router.get("/contacts", function (req, res) {
    console.log("GET /contacts");
    var contacts = _contacts;
    res.json({ contacts: contacts });
});
router.get("/contact", function (req, res) {
    var id = +req.query.id;
    console.log("GET /contact", "id:", id);
    var contact = _contacts.filter(function (t) { return t.id === id; })[0];
    res.json({ contact: contact });
});
router.get("/items", function (req, res) {
    var filters = req.query;
    console.log("GET /items", "filters:", filters);
    var filteredListItems = _listItems.filter(function (t) {
        var typePass = filters.type ? t.type.indexOf(filters.type) > -1 : true;
        var colorPass = filters.color ? t.color.indexOf(filters.color) > -1 : true;
        var ratingPass = filters.minRating ? t.rating >= filters.minRating : true;
        return typePass && colorPass && ratingPass;
    });
    var listItems = filteredListItems.reduce(function (acc, t) { return (acc[t.id] = t, acc); }, {});
    var list = filteredListItems.map(function (t) { return t.id; });
    res.json({ listItems: listItems, list: list });
});
router.get("/item", function (req, res) {
    var id = +req.query.id;
    console.log("GET /item", "id:", id);
    var item = _listItems.filter(function (t) { return t.id === id; })[0];
    res.json({ item: item });
});
router.post("/rate", function (req, res) {
    var id = req.body.id;
    var yourRating = req.body.yourRating;
    console.log("POST  /rate", "id:", id, "yourRating:", yourRating);
    if (yourRating > 10) {
        res.status(500);
        res.json({ status: 'ERROR', message: "Rating cannot be > 10" });
    }
    else {
        var item = _listItems.filter(function (t) { return t.id === id; })[0];
        item.yourRating = yourRating;
        res.json({ status: 'OK' });
    }
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(port);
console.log("Server port: " + port);
//# sourceMappingURL=/Users/mrjasonweaver/Projects/list-organizer/server/server.js.map