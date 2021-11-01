const express = require("express");
const app = express();
const path = require("path");

app.listen(3000);

app.use(express.static(path.join(__dirname, "public"))); // Me permite definir la carpeta public que express va a servir de manera estática. Express solo va a servir lo que este dentro de esta carpeta, no tiene "permiso" para servir nada más. Todas las rutas dentro de esta carpeta express las va a servir de oficio.

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

// nodemon sirve para que cada vez que haga un cambio en .js se reinicia el servidor automaticamente. Asi no tengo que estar prendiendo y apagando manualmente todo el rato
