module.exports = {
	name: 'accept',
	description: 'Accept the chess match by stating the username',
	execute(msg, msgContent, currentGames) {
        //for some reason, if someone accepts before i make a move, it bugs out by not adjusting the position
        msgContent.shift();
        let opponent  = msgContent.join(' ');

        //see if the user is in game already
        for(let i = 0; i < currentGames.length; i++){
            if(currentGames[i].Black == msg.author.username){
                msg.reply("You're in game already.");
                return;
            }
        }
        for(let i = 0; i < currentGames.length; i++){
           if(currentGames[i].White == opponent && currentGames[i].Black == ""){
               currentGames[i].Black = msg.author.username;       
               msg.reply("accepted the game");
           }
           else if(i == currentGames.length - 1){
               msg.reply("Couldn't find opponent");
               return;
           }
       }
    },
}