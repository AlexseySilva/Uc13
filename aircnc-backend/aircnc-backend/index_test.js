require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar o parser de JSON em todas as rotas
app.use(express.json());
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
    return res.json({
        message: 'API AirCNC rodando...',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// Rota de teste
app.get('/ping', (req, res) => {
    console.log('recebeu ping');
    res.json({ message: 'pong', status: 'success' });
});

// Rota de teste para spots (sem banco de dados)
app.get('/spots', (req, res) => {
    res.json({
        spots: [
            {
                id: 1,
                thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500',
                company: 'Rocketseat',
                price: 120,
                techs: ['React', 'React Native', 'Node.js']
            },
            {
                id: 2,
                thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500',
                company: 'Google',
                price: 200,
                techs: ['React', 'Node.js', 'TypeScript']
            }
        ]
    });
});

// Rota de teste para sessões
app.post('/sessions', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: 'Email é obrigatório' });
    }
    
    res.json({
        user: {
            id: 1,
            email: email,
            name: 'Usuário Teste'
        }
    });
});

// Servir arquivos estáticos
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));

// Iniciar servidor sem banco de dados
const port = process.env.PORT || 3335;
app.listen(port, () => {
    console.log(`🚀 Servidor de teste rodando na porta ${port}`);
    console.log(`📱 Acesse: http://localhost:${port}`);
    console.log(`🔗 Teste: http://localhost:${port}/ping`);
    console.log(`📋 Spots: http://localhost:${port}/spots`);
}); 