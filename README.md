# AirCNC - Projeto Full Stack

> **Projeto desenvolvido como parte do curso ministrado pelo Professor [Fernando J Silva](https://github.com/fernandojsilvasenac) no Senac Campinas.**

## 👨‍🏫 Professor
- [Fernando J Silva](https://github.com/fernandojsilvasenac)
- Docente do Senac Campinas
- Especialista em Web, Mobile, Backend, DevOps e Cloud

---

## 💡 Sobre o Projeto
O AirCNC é uma plataforma inspirada no Airbnb, mas voltada para aluguel de espaços de trabalho e coworking. O objetivo é proporcionar uma experiência prática de desenvolvimento **Full Stack**, utilizando tecnologias modernas do mercado.

---

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (com Mongoose)
- **Multer** (upload de arquivos)
- **CORS**

### Frontend
- **React** (com Vite)
- **Axios**
- **React Router**

---

## 📋 Pré-requisitos
- Node.js (14+)
- npm ou yarn
- MongoDB Atlas (conta gratuita)
- Git

---

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd Uc13
```

### 2. Backend
```bash
cd aircnc-backend/aircnc-backend
npm install
cp env.example .env
# Edite o arquivo .env com suas credenciais do MongoDB
npm start
```

### 3. Frontend
```bash
cd aircnc-frontend_defaultFront/aircnc-frontend_default
npm install
npm run dev
```

---

## 🌐 Acesse
- Backend: [http://localhost:3335](http://localhost:3335)
- Frontend: [http://localhost:5173](http://localhost:5173)

---

## 📝 Exemplo de `.env`
```env
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=aircnc
PORT=3335
NODE_ENV=development
```

---

## 📁 Estrutura do Projeto
```
Uc13/
├── aircnc-backend/
│   └── aircnc-backend/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── uploads/
│       ├── index.js
│       ├── package.json
│       └── env.example
└── aircnc-frontend_defaultFront/
    └── aircnc-frontend_default/
        ├── src/
        ├── public/
        ├── package.json
        └── README.md
```

---

## 🔌 Endpoints da API
- `POST /sessions` — Login de usuário
- `GET /spots` — Listar espaços
- `POST /spots` — Criar novo espaço
- `GET /dashboard` — Listar espaços do usuário
- `POST /spots/:id/upload` — Upload de imagem

---

## 🛡️ Segurança
- Credenciais protegidas por `.env` (não commitadas)
- Exemplo de configuração em `env.example`
- `.gitignore` atualizado

---

## 🐛 Dicas de Solução de Problemas
- **Erro de conexão MongoDB:** Verifique credenciais e IP liberado no Atlas
- **Erro de CORS:** Backend e frontend devem estar rodando nas portas corretas
- **Erro de upload:** Confirme existência e permissão da pasta `uploads/`

---

## 🤝 Contribua!
1. Faça um fork
2. Crie uma branch: `git checkout -b feature/NovaFuncionalidade`
3. Commit: `git commit -m 'Minha contribuição'`
4. Push: `git push origin feature/NovaFuncionalidade`
5. Abra um Pull Request

---

## 📄 Licença
Projeto sob licença MIT.

---

## 👩‍💻 Para Novos Alunos
Este repositório é um excelente ponto de partida para quem deseja aprender desenvolvimento web moderno, com práticas de mercado e orientação de um professor experiente. Siga o passo a passo, explore o código e aproveite para experimentar!

---

**Bons estudos e boas práticas de programação!** 