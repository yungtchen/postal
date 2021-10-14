const express = require("express");
const Pusher = require("pusher");

const { pusherAppId, pusherKey, pusherSecret } = process.env;
const pusher = new Pusher({
  appId: pusherAppId,
  key: pusherKey,
  secret: pusherSecret,
  cluster: "us3",
  useTLS: true
});



const app = express();
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post('/message', (req, res) => {
    const data = req.body;
    pusher.trigger("my-channel", "my-event", {
        message: data
      });
    res.send(`Message ${JSON.stringify(data)}`);

});

app.listen(3000, () => {
  console.log("listening on 3000");
});