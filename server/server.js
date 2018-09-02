const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const cors = require('cors');
const request = require('request');
const rp = require('request-promise');

app.use(express.json())
app.use(express.static(publicPath));

app.get('/api/search', cors(), (req, res) => {
  const searchQuery = req.query.search;
  const options = {
    uri: `https://itunes.apple.com/search?term=${searchQuery}&limit=15&entity=album`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
    .then(function (response) {
      //console.log(res.results);
      res.json(response);
    })
    .catch(function (err) {
      console.log(err)
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});


//PORT setup - local and on heroku
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
