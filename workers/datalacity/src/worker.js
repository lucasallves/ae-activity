const api = require('./services/api');
const BusinessController = require('./controllers/business');

class Worker {
  async run() {
    const businessController = new BusinessController();
    const offset = await businessController.countDocuments() || -1;

    const params = {
      "$limit": 1000,
      "$offset": offset + 1
    }

    let response;

    do {
      response = await api.get('/', { params });
      await businessController.insertMany(response.data);
      params['$offset'] += params['$limit'] + 1;
    } while (response.data.length > 0);
  }
}

module.exports = new Worker();