const express = require('express');

const app = express();

/* 

GET - Buscar informações no servidor;
POST - Inserir uma informação no servidor;
PUT - Alterar uma informação no servidor;
PATCH - Alterar uma informação específica;
DELETE - Deletar uma informação no servidor;

*/

app.get("/courses", (request, response) => {
    return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post("/courses", (request, response) => {
    return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put("/courses/:id", (request, response) => {
    return response.json(['Curso 5', 'Curso 2', 'Curso 3', 'Curso 4']);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(['Curso 5', 'Curso 7', 'Curso 3', 'Curso 4']);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(['Curso 5', 'Curso 7', 'Curso 4']);
});

app.listen(3333);

console.log("Aplicação rodando...");