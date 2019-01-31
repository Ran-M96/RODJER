const mongoose = require('mongoose');


// Exemples du tutoriel
var cardSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: {createdAt: 'created_at'}
});

cardSchema.methods = {


    authenticate: function (password) {
        return passwordHash.verify(password, this.password);
    },
    getToken: function () {
        return jwt.encode(this, config.secret);
    }
};

module.exports = mongoose.model('Card', cardSchema);