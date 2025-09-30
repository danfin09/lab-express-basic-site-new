const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, 'public')));



app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'about.html'));
});

app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'works.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'gallery.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
});
