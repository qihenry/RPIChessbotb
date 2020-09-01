const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'sends an embedded message to help the user with the commands',
	execute(msg) {
        const suggestionEmbed = new Discord.MessageEmbed()
        .setTitle("COMMANDS TO PLAY CHESS")
        .setDescription("```➥!createGame <FEN>: Creates a game with you starting as white. If you include the FEN, it can load a position```\n" +
                        "```➥!accept [username]: Accepts a game after someone creates a game. Ex) !accept johnsmith1 (no @)```\n" +
                        "```➥!move [notation]: Moves the pieces. The notation must be standard with capitalization```\n");
        msg.delete();
        msg.reply(suggestionEmbed);
    },
}