const mongoose = require("mongoose");

const sudoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    addedBy: { type: String, required: true },
    date: { type: String, default: Date.now }
});

const sudoDB = mongoose.model("sudoDB", sudoSchema);
module.exports = { sudoDB };
