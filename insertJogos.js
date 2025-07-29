require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'borajogar';

async function run() {
  await client.connect();
  const db = client.db(dbName);
  const jogos = db.collection('jogos');

  await jogos.insertOne({
    _id: 'jogo123',
    local: 'Arena Society Uberlandia',
    data_hora: '2025-07-15T19:30:00',
    tipo: 'society',
    numero_jogadores: 10,
    organizador_id: 'user001',
    participantes: ['user001'],
    status: 'confirmado'
  });

  console.log('Jogo inserido.');
  await client.close();
}

run();