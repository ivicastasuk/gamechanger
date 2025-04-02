// Uvoz modula
const express = require('express');
const path = require('path');

// Inicijalizacija aplikacije
const app = express();
const PORT = process.env.PORT || 3000;

// Podesi putanju do statičkih fajlova (CSS, JS, slike...)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Osnovna ruta (možeš kasnije napraviti routing po potrebi)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Pokreni server
app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});