const mongodb = require('mongoose');
const ObjectId = mongodb.Schema.Types.ObjectId;

const categorySchema = mongodb.Schema({

  _id: ObjectId,
  name: { type: String, required: true, unique: true, },

  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },
});

module.exports = mongodb.model('Category', categorySchema);