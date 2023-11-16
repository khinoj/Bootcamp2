const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// resolvers how you fulfill the queries. 
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // finding the classes inside mongodb
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
