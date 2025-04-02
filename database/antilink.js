const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    groupId: { type: String, required: true, unique: true },
    mode: { type: String, default: "off" }, // "warn", "delete", "kick", "off"
    users: [{
        userId: { type: String, required: true },
        warns: { type: Number, default: 0 }
    }]
});

const AntilinkDB = mongoose.model("AntilinkDB", groupSchema);

async function getAntilink(groupId) {
    let data = await AntilinkDB.findOne({ groupId });
    return data ? data.mode : "off";
}

async function setAntilink(groupId, mode) {
    await AntilinkDB.findOneAndUpdate({ groupId }, { mode }, { upsert: true, new: true });
}

async function getUserWarns(groupId, userId) {
    let group = await AntilinkDB.findOne({ groupId });
    let user = group?.users.find(u => u.userId === userId);
    return user ? user.warns : 0;
}

async function addWarn(groupId, userId) {
    let group = await AntilinkDB.findOne({ groupId });
    if (!group) {
        group = await AntilinkDB.create({ groupId, users: [{ userId, warns: 1 }] });
    } else {
        let user = group.users.find(u => u.userId === userId);
        if (user) {
            user.warns += 1;
        } else {
            group.users.push({ userId, warns: 1 });
        }
        await group.save();
    }
}

async function resetWarns(groupId, userId) {
    let group = await AntilinkDB.findOne({ groupId });
    if (group) {
        group.users = group.users.filter(u => u.userId !== userId);
        await group.save();
    }
}

module.exports = { getAntilink, setAntilink, getUserWarns, addWarn, resetWarns };
