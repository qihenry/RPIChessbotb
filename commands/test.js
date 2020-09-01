module.exports = {
	name: 'test',
	description: 'test the function for a chess game',
	execute(msg, Currentgames) {
        /*msg.reply(Currentgames[0].White);
        msg.reply("The FEN method" + Currentgames[0].getFEN());
        msg.reply("The getPosition() at e2: " + Currentgames[0].getPosition("e2"));
        msg.reply("The getNotation() at 4,3: " + Currentgames[0].getNotation(4,3));*/
        //let array = Currentgames[0].movesForPiece('p',4,1);
        /*msg.reply("Array of moves for a black pawn at " + Currentgames[0].getNotation(4,1) + ": " + array);
        array = Currentgames[0].movesForPiece('P',4,1);
        msg.reply("Array of moves for a white pawn at " + Currentgames[0].getNotation(4,1) + ": " + array);
        array = Currentgames[0].movesForPiece('p',1,1);
        msg.reply("Array of moves for a black pawn at starting position"  + ": " + array);
        array = Currentgames[0].movesForPiece('P',6,1);
        msg.reply("Array of moves for a white pawn at starting position"  + ": " + array);
        array = Currentgames[0].movesForPiece('R',3,3);
        msg.reply("Array of moves for a white rook at " + Currentgames[0].getNotation(3,3)  + ": " + array);
        array = Currentgames[0].movesForPiece('N',3,3);
        msg.reply("Array of moves for a white knight at "+ Currentgames[0].getNotation(3,3)  + ": " + array);
        array = Currentgames[0].movesForPiece('B',3,3);
        msg.reply("Array of moves for a white Bishop at "+ Currentgames[0].getNotation(3,3)  + ": " + array);*/
        Currentgames[0].setPosition("rnbqkb1r/ppp1pppp/111N1n11/1B1p1111/111PP111/11111111/PPP11PPP/RNBQK1NR");
        msg.channel.send('http://www.fen-to-image.com/image/' + Currentgames[0].getFEN());
        array = Currentgames[0].inCheck("e8","black");
        msg.reply("In check: " + array);
        /*array = Currentgames[0].whichPieceMovses('P',"e4");
        msg.reply("whichPieceMoves returns the position where the piece will move from: " + array);
        Currentgames[0].makeMove("e4");
        msg.channel.send('http://www.fen-to-image.com/image/' + Currentgames[0].getFEN());
        msg.reply("It is " + Currentgames[0].turn);
        */
    },
}