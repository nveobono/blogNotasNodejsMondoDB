const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodoverride = require('method-override');
const expresssession = require('express-session');
//inicializaciones

const app = express();
require('./database');

//settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middleware

app.use(express.urlencoded({ extended: false}));
app.use(methodoverride('_method'));
app.use(expresssession({
    secret: 'leslie',
    resave: true,
    saveUninitialized: true
}));

//global variables


//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/user'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});