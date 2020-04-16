const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const cors = require('cors');
const config = require('./config/db');
const account = require('./routes/account');
const userProfile = require('./routes/userProfile');
const passport = require('passport')

// let corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname, 'public')));
// routing account
app.use('/account', account);
app.use('/userProfile', userProfile);

mongoose.connect(config.db);

mongoose.connection.on('connected', () => {
  console.log('Мы успешно подключились к БД');
});

mongoose.connection.on('error', (err) => {
  console.log('Мы не подключились к БД: ' + err);
});

app.get('/', (req, res) => {
  res.send('main page')
});


app.listen(3000, () => console.log('FBK server running on port 3000!'));
