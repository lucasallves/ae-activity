const Collection = require('../utils/collection');

class BusinessModel extends Collection {
  constructor() {
    super('business');
  }
}

module.exports = BusinessModel;