const express = require('express');

const exphbs = require('express-handlebars');
const path = require('path');

// Inicializacion
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({extended: false}));


// Rutas
app.get('/', (req, res) => {
    res.render('index')
});

// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;