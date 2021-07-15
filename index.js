const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path =  require('path')
const bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/mail/:subject', (req, res) => {
  res.send('ok')
})
app.get('/contact', (req, res) => {
  res.send('contact')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body.name);

   res.send(`recieved your request!${req.body.name}`);
});