const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
