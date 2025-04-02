const mongoose = require('mongoose');

const antiDeleteSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  enabled: { type: Boolean, default: false }
});

module.exports = mongoose.model('AntiDelete', antiDeleteSchema);
