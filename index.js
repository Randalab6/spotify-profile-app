require('dotenv').config()
const express = require('express');
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

//route handler 
app.get('/', (req, res) => {
    const data = {
      name: 'Ruru',
      isAwesome: true
    }
    res.json(data)
  });

  app.get('/param-generators', (req, res) => {
    const {name, isAwesome } = req.query;
    res.send(`${name} was ${JSON.parse(isAwesome) ? 'really' : 'always'} awesome & amazing`)
  });
  
//listen for connection
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
  });