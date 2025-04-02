const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    note: { type: String, required: true }
}, { timestamps: true });

const notes = mongoose.model("notes", NotesSchema);
module.exports = { notes };
