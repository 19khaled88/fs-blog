const Post = require("../models/post")

exports.createPost=async(req,res,next)=>{
    const {title, content, meta,tags,slug} = req.body
    const newPost = new Post({title, content,slug,meta})
    console.log(newPost)
    newPost.tags = JSON.stringify(tags)
    if(newPost){
        await newPost.sade()
        res.status(200).json({success:true, message:'post has been created',data:newPost})
    }
    
    // try {
    //     const {title, content, meta,tags,slug} = req.body
    //     const newPost = new Post({title, content,slug,meta})
    //     newPost.tags = JSON.stringify(tags)
    //     if(newPost){
    //         await newPost.sade()
    //         res.status(200).json({success:true, message:'post has been created',data:newPost})
    //     }
    
    // } catch (error) {
    //     // res.status(400).json({success:false,error:error.message})
    //     next(error)
    // }
}
exports.getPosts=async(req,res)=>{
    try {
        res.status(200).json({success:true, message:'data has been resolved'})
    } catch (error) {
        res.status(400).json({success:false})
    }
}