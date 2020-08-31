const Controller = require("../utils/controller");
const BusinessModel = require('../models/Business');

class BusinessController extends Controller {
  async insertMany(businesses) {
    if (!businesses.length) {
      return [];
    }

    try {
      const businessModel = new BusinessModel();
      const { insertedIds, insertedCount } = await businessModel.insertMany(businesses);

      console.log('INSERTED IDS 123:', insertedCount);

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