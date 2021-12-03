const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        // unique: true,
        required: true,
        index: true
    },
    actor: {
        type: Array,
        index: true
    },
    rating: {
        type: Number
    },
    releaseDate: {
        type: Number
    }
},
    {
        timestamps: {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

// movieSchema.index({
//     title: "text",
//     actor: "text"
// })


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;