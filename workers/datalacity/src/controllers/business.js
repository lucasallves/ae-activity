const Controller = require("../utils/controller");
const BusinessModel = require('../models/Business');

class BusinessController extends Controller {
  async insertMany(businesses) {
    if (!businesses.length) {
      return [];
    }

    try {
      const businessModel = new BusinessModel();
      const { insertedIds } = await businessModel.insertMany(businesses);
      return insertedIds;
    } catch (err) {
      console.log('ERR:', err);
    }
  }

  async countDocuments() {
    const businessModel = new BusinessModel();
    return businessModel.countDocuments();
  }
}

module.exports = BusinessController;