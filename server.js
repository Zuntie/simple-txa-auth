const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;


// Session Middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


// Route Import
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');


// Use Routes
app.use('/', indexRoutes);
app.use('/', authRoutes);


// Server Listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});