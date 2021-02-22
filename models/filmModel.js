const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const filmSchema = new Schema({
    id: {
        type: ObjectId,
    },
    title:{
        type: String,
        
        default: "movie"
        
    },
    year: {
        type: Number
    },
    overview: {
        type: String
    },
    image: {
        type: String
    },
    genre: {
        type: String,
        enum:
        {
            "Action":28,
            "Adventure":12,
            "Animation":16,
            "Comedy": 35,
            "Crime": 80,
            "Documentary": 99,
            "Drama": 18,
            "Family": 10751,
            "Fantasy": 14,
            "History": 36,
            "Horror": 27,
            "Music": 10402,
            "Mystery": 9648,
            "Romance":10749,
            "Science Fiction":878,
            "Thriller":53,
            "War": 10752,
            "Western": 37
        }
        
    },
    adult: {
        type: Boolean,
        default: false
    }
})

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;













