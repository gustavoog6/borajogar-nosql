require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'borajogar';

async function run() {
  await client.connect();
  const db = client.db(dbName);
  const quadras = db.collection('quadras');

  await quadras.insertOne({
    _id: 'quadra001',
    nome: 'Arena Society Uberlandia',
    endereco: {
      rua: 'Av. Floriano Peixoto, 123',
      bairro: 'Santa Monica'
    },
    valor_por_hora: 120.0,
    contato: '(34) 99999-0000'
  });

  console.log('Quadra inserida.');
  await client.close();
}

run();