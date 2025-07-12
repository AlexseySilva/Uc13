const mongoose = require('mongoose');

const SpotsSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

//campo vritual criado para mostrar as imagens dos Spots
SpotsSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3335/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spots', SpotsSchema )