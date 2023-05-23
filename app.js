const express = require("express");
const app = express();

app.use(express.json());

app.get("/usuarios", (req, res) => {
    return res.json({
        erro: false,
        nome: "Cesar",
        email: "cesar@celke.com.br"
    });
});

app.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        erro: false,
        id,
        nome: "Cesar",
        email: "cesar@celke.com.br"
    });
});

app.post("/user", async (req, res) => {
    const { name, email } = req.body;   
    return res.json({
        name,
        email
    })
   
        
});

app.put("/usuario", (req, res) => {
    const { id, nome, email } = req.body;    
    return res.json({
        erro: false,
        id,
        nome,
        email
    });
});

app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;    
    return res.json({
        erro: false,
        id
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});