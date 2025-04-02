const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
    groupId: { type: String, required: true, unique: true },
    enabled: { type: Boolean, default: false }
});

module.exports = mongoose.model('Chatbot', chatbotSchema);
