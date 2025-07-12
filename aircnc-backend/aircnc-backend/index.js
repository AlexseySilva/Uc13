require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');//ODM

const routes = require('./routes');

const app = express();
// Habilitar o parser de JSON em todas as rotas
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send('API AirCNC rodando...')
})
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

app.get('/ping', (req, res) => {
    console.log('recebeu ping');
    res.send('pong');
})

async function startDatabase(){
    const { DB_USER, DB_PASS, DB_NAME } = process.env
    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@apijacinto.dizjg95.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=ApiJacinto`;
    
    try {
        await mongoose.connect(uri);
        console.log('Conectado ao MongoDBAtlas');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB: ', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
}

startDatabase().then( ()=> {
    const port = process.env.PORT || 3335
    app.listen(port, () =>{
        console.log(`Servidor rodando na porta ${port}`);
    })
})



