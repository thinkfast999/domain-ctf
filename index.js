const express = require('express')
const app = express()
const port = 3000
//hehe
// GET request on '/', aka the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
