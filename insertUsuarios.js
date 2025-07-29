require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'borajogar';

async function run() {
  await client.connect();
  const db = client.db(dbName);
  const usuarios = db.collection('usuarios');

  await usuarios.insertMany([
    {
      _id: 'user001',
      nome: 'Carlos Silva',
      idade: 28,
      posicao_preferida: 'goleiro',
      cidade: 'Uberlandia',
      historico_jogos: ['jogo123'],
      avaliacoes: [
        { jogo_id: 'jogo123', nota: 5, comentario: 'Jogou bem demais!' }
      ]
    }
  ]);

  console.log('Usuarios inseridos.');
  await client.close();
}

run();