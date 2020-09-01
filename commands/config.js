const mongoose = require('mongoose');
const Player = require('../models/player');

module.exports = {
	name: 'config',
	description: 'sets up the profile and adds it to the mongoDB database',
	execute(msg) {
        let userID = msg.author.id;
        Player.updateOne(
            {discordID: userID},
            {$set: {_id: mongoose.Types.ObjectId(),
                    wins : 0,
                    losses : 0,
                    draws : 0}},
            {upsert: true}
        )
        .then(result => {console.log(result); msg.reply("added")})
        .catch(err => {console.log(err); msg.reply("err: probably already in database")});

    },
}