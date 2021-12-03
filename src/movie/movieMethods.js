const Movie = require("./movieModels")
const mongoose = require("mongoose")

exports.addMovie = async (movieObj) => {
    try {
        const movie = await new Movie(movieObj)
        await movie.save();
        console.log(`Successfully added ${movie.title}`);
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.listMovies = async () => {
    try {
        console.log(await Movie.find({}));
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.deleteOne = async (movieObj) => {
    try {
        const movie = await Movie.deleteOne(movieObj)
        console.log(movie.deletedCount)
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.updateOne = async (movieObj, movieObj2) => {
    try {
        const movie = await Movie.updateOne(movieObj, movieObj2)
        console.log(movie.nModified);
        console.log(Object.keys(movieObj2));
        mongoose.connection.close()
    } catch (error) {
        console.log(error);

    }
}
exports.searchTerm = async (movieObj) => {
    try {
        const movie = await Movie.find({
            $text: { $search: movieObj }
        })
        console.log(movie);
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.addActor = async (movieObj) => {
    console.log(movieObj);
    try {
        const movie = await Movie.updateOne({ title: movieObj.title }, { $push: { actor: movieObj.actor } }, { returnOriginal: false })
        console.log(movie);
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.removeActor = async (movieObj) => {
    try {
        const movie = await Movie.findOneAndUpdate({ title: movieObj.title }, { $pull: { actor: movieObj.actor } })
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }

}
exports.searchMovie = async (movieObj) => {
    try {
        const movie = await Movie.find(movieObj)
        console.log(movie);
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}
exports.searchByRating = async (movieObj) => {
    try {
        const movie = await Movie.where("rating").equals(movieObj)
        console.log(movie);
    } catch (error) {
        console.log(error);
    }
}