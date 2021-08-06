const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

dotenv.config({ path: 'config.env' });

const app = express();

const PORT = process.env.PORT || 3001;

//log reguests
app.use(morgan('tiny'));

// parse request to bodyParser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

// if he view are in sub dir
// app.set('views', path.resolve(__dirname, 'views/ejs'));

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
