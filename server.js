const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// being able to pull from the API
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Data collected for the tables, first 5 will be in tables.
const tables = [];
const waitlist = [{
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
    }
];


// routes for the different pages erver.js

// app.get
// 3 different routes: home page, view tables, and make reservation
// tables.html, home.html, reservation.html
app.get('/', (req,res) => res.sendFile(path.join(__dirname,"home.html")));

app.get('/tables', (req,res) => res.sendFile(path.join(__dirname,"tables.html")));

app.get('/reserve', (req,res) => res.sendFile(path.join(__dirname,"reserve.html")));

// 2 different routes for api table link and api wait list 
app.get('/api/wailist', (req, res) => {
    
    res.json(waitlist)
    
});

app.get('/api/waitlist', (req, res) => res.json(waitlist));
// display the tables / app.post will be below here with the routes

app.post('/api/waitlist', (req,res) => {
    const newWaitlist = req.body;
    res.json(newWaitlist);
})


app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
