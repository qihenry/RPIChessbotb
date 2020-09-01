const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongoose.connect('mongodb+srv://qihenry301:asterick301@test.oxsfq.mongodb.net/<dbname>?retryWrites=true&w=majority', dbOptions);
        mongoose.set('useFindAndModify', false);

        mongoose.connection.on('connected', () => {
            console.log('Mongoose has successfully connected!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose connection lost');
        });
    }
};