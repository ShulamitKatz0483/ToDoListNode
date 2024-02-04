
const express = require('express');

const app = express();
const port = 3000; // Choose any available port

const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');

app.get('/', async(req, res) => {
   // sdk.auth(process.env.API_KEY);
   sdk.auth('rnd_0U60aH7suvveBrsrKe5BiRdFqSej');
    sdk.getServices({limit: '20'})
    .then(({ data }) => {
        console.log(data);
        res.json(data);
    })
    .catch(err => console.error(err))
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


 