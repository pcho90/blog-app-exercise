const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const checkId = id => {
  return ObjectId(id) instanceof mongoose.Types.ObjectId;
};

module.exports = checkId;
