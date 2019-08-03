const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const path = require('path');
const PORT = process.env.PORT || 8080;

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send(JSON.stringify({ test: 'data' }));
});

//app.use(express.static("build"));

app.listen(PORT, () => {
  console.log('server is listening on http://localhost:' + PORT);
});
