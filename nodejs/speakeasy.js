const Express = require("express");
const Speakeasy = require("speakeasy");

var app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Gera token secreto para ser salvo em um aplicativo de autenticação
app.post("/secret", (_, response) => {
    var secret = Speakeasy.generateSecret({ length: 20 });
    response.send({ "secret": secret.base32 });
    console.log(secret);
});

// Gera código (TOTP) com base no token secreto
app.post("/generate", (request, response) => {
    response.send({
        "token": Speakeasy.totp({
            secret: request.body.secret,
            encoding: "base32"
        }),
        "remaining": (30 - Math.floor((new Date()).getTime() / 1000.0 % 30))
    });
});

// Valida código (TOTP) de um determinado token segredo e e verifica expiração
app.post("/validate", (request, response) => {
    response.send({
        "valid": Speakeasy.totp.verify({
            secret: request.body.secret,
            encoding: "base32",
            token: request.body.token,
            window: 0
        })
    });
    console.log(Speakeasy.totp({
        secret: request.body.secret,
        encoding: "base32"
    }))
});

app.listen(3001, () => {
    console.log("Listening at port 3001...");
});