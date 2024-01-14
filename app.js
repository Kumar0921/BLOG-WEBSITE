const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/blog', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

app.use('/api', routes);

app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log('Server is running on port ' + port);
});