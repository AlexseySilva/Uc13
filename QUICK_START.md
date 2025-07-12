# 🚀 Início Rápido - AirCNC

## ⚡ Configuração em 5 minutos

### 1. Backend
```bash
cd aircnc-backend/aircnc-backend
npm install
cp env.example .env
# Edite o arquivo .env com suas credenciais do MongoDB
npm start
```

### 2. Frontend
```bash
cd aircnc-frontend_defaultFront/aircnc-frontend_default
npm install
npm run dev
```

## 🔑 Configuração do MongoDB Atlas

1. Acesse [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Crie uma conta gratuita
3. Crie um cluster (gratuito)
4. Crie um usuário de banco de dados
5. Configure Network Access: `0.0.0.0/0`
6. Copie as credenciais para o arquivo `.env`

## 📝 Exemplo de .env
```env
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=aircnc
PORT=3335
```

## 🌐 URLs
- Backend: http://localhost:3335
- Frontend: http://localhost:5173

## ❗ Problemas Comuns

**Erro de conexão com MongoDB:**
- Verifique as credenciais no `.env`
- Confirme se o IP está liberado no Atlas

**Erro de CORS:**
- Backend deve estar rodando na porta 3335
- Frontend deve estar rodando na porta 5173

**Arquivo não encontrado:**
- Execute `npm install` em ambas as pastas

---

📖 Para instruções completas, veja o [README.md](README.md) 