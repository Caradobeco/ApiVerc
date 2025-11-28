


module.exports = (app) => {
  app.get('/noticia/tiponoticia/:tipo', async (req, res) => {
    await app.DBClient.connect();
    const tipo = req.body.tipo
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find({tiponoticia:tipo}).toArray();
    console.log(noticias);

    res.json(noticias)
  })
}