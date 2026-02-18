const app = require(`./app`);
require(`dotenv`).config()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor de aberto na porta ${PORT}`);
})