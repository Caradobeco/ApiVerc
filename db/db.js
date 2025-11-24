const { MongoClient, ServerApiVersion } = require('mongodb');
const url = process.env.dbconn; // chave gravada em variável de ambiente
// MongoClient
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
module.exports = client; // se quiser exportar
