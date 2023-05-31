const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(require('./routes/route'))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyparser.json());


require('./db/db.js')





app.listen(5000, () => console.log('server is running on 5000 port.....'));