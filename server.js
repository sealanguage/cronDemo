const express = require('express');

const app = express();   // gives an instance of the app server, this constructs it

app.get('/', (req, res) => res.send("Hello"));

const main = require('./routes/api/main');

app.use('/api/main', main);

const test = require('/test');

app.use('/test', test);

const port = process.env.PORT || 5000;    // check for an environment variable

// app.lister(port, () => {
//     // console.log('Server running on port', port)
//     console.log(`Server running on ${port}`)
// });

app.listen(port, () => console.log(`Server running on ${port}`));

