const mongoose = require('mongoose')
const typeId = require('')
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    meta:{
        type:String,
        required:true,
        trim:true
    },
    tags:[String],
    slug:{
        type:String,
        required:true,
        trim:true
    },
    authors:{
        type:String,
        default:'Admin'
    },
    thumbnail:{
        type:Object,
        url:{
            type:URL,
            required:true
        },
        public_id:{
            type:String,
            required:true
        }
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Post',postSchema)
