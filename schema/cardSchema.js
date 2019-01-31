const mongoose = require('mongoose');


// Exemples du tutoriel
var cardSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
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