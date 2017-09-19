const getRats = (db) => {
  return db('rats')
    .select('*')
}

module.exports = {
  getRats
}
