const https = require('https');

const express = require('express');
const requestify = require('requestify');

const app = express();
const port = process.env.PORT || 5000;

const url = 'https://www.adidas.co.uk/api/suggestions/Stans%20Smith'

app.get('/api/stansmith', (req, res) => {

  //We are calling the adidas API endpoint
  //When we get a response back, we are rendering the response body
  //where all information is being stored
  requestify.get(url).then(function(response) {
    console.log(response.body)
    res.json(response.body)
  });

});


app.listen(port, () => console.log(`Listening on port ${port}`));
