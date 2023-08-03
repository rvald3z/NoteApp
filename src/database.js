const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://127.0.0.1:27017/notes-app';

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Database is connected'))
.catch(err => console.log(err))