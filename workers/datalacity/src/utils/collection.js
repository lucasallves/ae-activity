const database = require(`./database`);

class Collection {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  get collection() {
    return database.db.collection(this.collectionName);
  }

  async insertMany(data) {
    return database.db.collection(this.collectionName).insertMany(data);
  }

  async countDocuments() {
    database.db.collection(this.collectionName).countDocuments();
  }
}

module.exports = Collection;