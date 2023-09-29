const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// TODO: Add a comment describing the functionality of this expression
// required package for cookies
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// TODO: Add a comment describing the functionality of this object
// setup for cookie
const sess = {
  secret: 'Super secret secret',
  // Settings object for the session ID cookie. The default value is { path: '/', httpOnly: true, secure: false, maxAge: null }.
  cookie: {},
  //Forces the session to be saved back to the session store, even if the session was never modified during the request.
  resave: false,
  // Forces a session that is “uninitialized” to be saved to the store. A session is uninitialized when it is new but not modified.
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// TODO: Add a comment describing the functionality of this statement
// passes sess into the session as middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
