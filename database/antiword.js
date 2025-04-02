const mongoose = require("mongoose");

const antiwordSchema = new mongoose.Schema({
    groupId: { type: String, required: true, unique: true },
    enabled: { type: Boolean, default: false },
    words: { type: [String], default: [] }
});

const AntiwordDB = mongoose.model("AntiwordDB", antiwordSchema);

async function getAntiwordData(groupId) {
    return await AntiwordDB.findOne({ groupId }) || { enabled: false, words: [] };
}

async function setAntiwordStatus(groupId, status) {
    await AntiwordDB.findOneAndUpdate(
        { groupId },
        { enabled: status },
        { upsert: true }
    );
}

async function addAntiword(groupId, word) {
    word = word.toLowerCase();
    await AntiwordDB.findOneAndUpdate(
        { groupId },
        { $addToSet: { words: word } },
        { upsert: true }
    );
}

async function removeAntiword(groupId, word) {
    word = word.toLowerCase();
    await AntiwordDB.findOneAndUpdate(
        { groupId },
        { $pull: { words: word } }
    );
}

module.exports = { getAntiwordData, setAntiwordStatus, addAntiword, removeAntiword };
