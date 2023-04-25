require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const express = require('express');
const app = express();
const port = 8888;

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