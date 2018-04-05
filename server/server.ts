
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

const port = 4444;

const router = express.Router();

const _listItems = [
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
    "speaker": "white",
    "description": "64-bit architecture. Four-core design. Over 3.3 billion transistors. Translation: iPad is incredibly fast. Which comes in handy when you want to edit a 4K video, play graphics-intensive games, or experience the latest augmented reality apps.",
    "yourRating": null,
    "rating": 8.5
  },
  {
    "id": 113,
    "type": "watch",
    "speaker": "black",
    "description": "Take a call when you’re out on the water. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.",
    "yourRating": null,
    "rating": 8.2
  }
];


router.get("/items", (req, res) => {
  const filters = req.query;
  console.log("GET /items", "filters:", filters);
  const filteredListItems = _listItems.filter(t => {
    const typePass = filters.type ? t.type.indexOf(filters.type) > -1 : true;
    const colorPass = filters.color ? t.color.indexOf(filters.color) > -1 : true;
    const ratingPass = filters.minRating ? t.rating >= filters.minRating : true;
    return typePass && colorPass && ratingPass;
  });

  const listItems = filteredListItems.reduce((acc, t) => (acc[t.id] = t, acc), {});
  const list = filteredListItems.map(t => t.id);

  res.json({listItems, list});
});

router.get("/item", (req, res) => {
  const id = +req.query.id;
  console.log("GET /item", "id:", id);
  const item = _listItems.filter(t => t.id === id)[0];
  res.json({item});
});

router.post("/rate", (req, res) => {
  const id = req.body.id;
  const yourRating = req.body.yourRating;
  console.log("POST  /rate", "id:", id, "yourRating:", yourRating);

  if (yourRating > 10) {
    res.status(500);
    res.json({status: 'ERROR', message: "Rating cannot be > 10"});
  } else {
    const item = _listItems.filter(t => t.id === id)[0];
    item.yourRating = yourRating;
    res.json({status: 'OK'});
  }
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