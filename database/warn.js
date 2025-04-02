const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
    id: { type: String, required: true },
    reason: { type: String, default: "No Reason" },
    date: { type: String, default: Date.now },
    group: { type: String, default: "Private Chat" },
    warnedby: { type: String, default: "false" },
    warnCount: { type: Number, default: 0 }
});

const warndb = mongoose.model("warndb", BlockSchema);
module.exports = { warndb };
