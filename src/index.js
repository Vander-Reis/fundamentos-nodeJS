const express = require('express');

const app = express();

//metodos para usar com o express
app.get("/courses", (request, response) => {
    return response.json([
        "curso1",
        "curso2",
        "curso3"
    ])
})

app.post("/courses", (request, response) => {
    return response.json([
        "curso1",
        "curso2",
        "curso3",
        "curso4"
    ])
})

app.put("/courses/:id", (request, response) => {
    return response.json([
        "curso 6",
        "curso 2",
        "curso 3",
        "curso 4"
    ])
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "curso 6",
        "curso 7",
        "curso 3",
        "curso 4"
    ])
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "curso 6",
        "curso 7",
        "curso 3",
    ])
})

//aonde vamos passar nossa porta
app.listen(3333);