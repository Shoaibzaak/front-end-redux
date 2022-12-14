const mongoose=require('mongoose')

const postSchema = mongoose.Schema({
    
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
})



module.exports = mongoose.model("PostMessage", postSchema);