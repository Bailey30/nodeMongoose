// require("dotenv").config();
require("./db/connection")

const yargs = require("yargs")

const { addMovie, listMovies, deleteOne, updateOne, searchTerm, addActor, searchMovie, removeActor, searchByRating } = require("./movie/movieMethods")
// const { updateOne, updateOne, deleteOne } = require("./movie/movieModels")

const app = async (args) => {

    switch (process.argv[2]) {
        case "add":
            addMovie({ title: args.title, actor: args.actor, rating: args.rating })
            break;
        case "list":
            listMovies()
            break;
        case "deleteone":
            deleteOne({ title: args.title })
            break;
        case "updateone":
            updateOne({ title: args.title }, { [args.key]: args.value })
            break;
        case "searchterm":
            searchTerm(args.term)
            break;
        case "addactor":
            const title = { title: args.title }
            const actor = { actor: args.actor }
            addActor({ ...title, ...actor })
            break;
        case "removeactor":
            const removeActorObj = {
                title: args.title,
                actor: args.actor
            }
            removeActor(removeActorObj)
            break;
        case "searchmovie":
            searchMovie({ title: args.title })
            break;
        case "searchrating":
            searchByRating(args.rating)
            break;
        default:
            console.log("incorrect command");
            break;
    }
    // process.exit()
}

// connection.once("open", async () => {
//     console.log("MongoDB database connection established successfully!");
   

//     // connection.close()
// });
app(yargs.argv)
// app(yargs.argv)