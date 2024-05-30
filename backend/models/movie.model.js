import { Mongoose, Schema } from "mongoose";
// import { type } from "os";

const movieSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    movies: [{
        type: Object
    }],
    isPublic: {
        type: Boolean,
        default: false
    }
})

export const Movie = Mongoose.model("Movie", movieSchema);