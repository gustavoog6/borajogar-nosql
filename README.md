# BoraJogar

Gerencie jogos esportivos de forma simples e eficiente. Este projeto utiliza MongoDB para estruturar os dados de usuários, quadras e jogos, com foco em usabilidade e performance.

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Node.js](https://img.shields.io/badge/Backend-Node.js-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 📌 Visão geral

O **BoraJogar** é um projeto acadêmico que simula uma plataforma de organização de rachas, com foco em:

- Cadastro de jogadores com preferências e histórico de partidas
- Organização de jogos com local, horário e participantes
- Avaliação pós-jogo entre os jogadores
- Estrutura pronta para ser integrada com backend REST ou GraphQL

---

## 📁 Estrutura do projeto

```
BoraJogar/
├── insertUsuarios.js
├── insertJogos.js
├── insertQuadras.js
├── package.json
├── .env (não versionado)
├── .gitignore
└── README.md
```

---

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/BoraJogar.git
cd BoraJogar
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` com a URI do MongoDB:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/
```

4. Execute os scripts:

```bash
npm run insertUsuarios
npm run insertJogos
npm run insertQuadras
```

---

## 🧱 Tecnologias utilizadas

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📌 Sugestões de expansão

- Integração com frontend em React Native ou Flutter
- Implementação de cache com Redis
- Sistema de login com JWT
- Geração automática de times

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](./LICENSE).
