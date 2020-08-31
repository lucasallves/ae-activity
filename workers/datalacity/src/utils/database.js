const MongoClient = require('mongodb').MongoClient;

class Database {
  constructor(url) {
    this.url = url;
  }

  async init() {
    this.client = await MongoClient.connect(this.url);
    this.db = this.client.db('aeactivity');
  }
}

module.exports = new Database('mongodb+srv://lucas:lucas@cluster0.cgpqh.mongodb.net/aeactivity');