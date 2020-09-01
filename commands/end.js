module.exports = {
	name: 'end',
	description: 'ends the chess match',
	execute(msg, currentGames) {
        for(let i = 0; i < currentGames.length; i++){
            if(currentGames[i].White == msg.author.username || currentGames[i].Black == msg.author.username){
                msg.reply("Ended the game between " + currentGames[i].White + " and " + currentGames[i].Black);
                currentGames.splice(i,1);
                 console.log(currentGames);
                 return;
            }
        }
       
        msg.reply("You're not in game");
    },
}