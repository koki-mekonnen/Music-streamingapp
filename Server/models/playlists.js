const mongoose = require("mongoose");

const Joi = require("joi");

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Objectid,
        ref: "user",
        required: true
    },
    songs: {
        type: Array,
        required: true
    },
    img: {
        type: String,

    },
    desc: {
        type: String,

    }

})
const validate = (playlist) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        user: Joi.string().required(),
        songs: Joi.string().required(),
        img: Joi.string().required(),
        desc: Joi.string().required(),
    });
    return schema.validate(playlist);
}

const Playlist = mongoose.model("playlist", playlistSchema);
module.exports(Playlist, validate)
