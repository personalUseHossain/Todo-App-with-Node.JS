const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TODO', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('sucessfully connected to mongdb'))
    .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true,
        trim: true,
    }
})

const TODO = new mongoose.model('TODO', todoSchema);



module.exports = { TODO };

