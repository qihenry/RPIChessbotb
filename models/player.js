const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    discordID: Number,
    wins: Number,
    losses: Number,
    draws: Number
});

module.exports = mongoose.model('Player', playerSchema, 'players' )