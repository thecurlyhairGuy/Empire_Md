const mongoose = require("mongoose");

const antitagSchema = new mongoose.Schema({
    groupId: { type: String, required: true, unique: true },
    enabled: { type: Boolean, default: false }
});

const AntitagDB = mongoose.model("AntitagDB", antitagSchema);

async function getAntitagData(groupId) {
    return await AntitagDB.findOne({ groupId }) || { enabled: false };
}

async function setAntitagStatus(groupId, status) {
    await AntitagDB.findOneAndUpdate(
        { groupId },
        { enabled: status },
        { upsert: true }
    );
}

module.exports = { getAntitagData, setAntitagStatus };
