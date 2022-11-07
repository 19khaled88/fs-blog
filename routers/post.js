const { createPost, getPosts } = require('../controllers/postController.js')
const multer = require('../middleware/upload.js');
const { postValidator, validate } = require('../middleware/validator.js');
const router = require('express').Router()

router.post('/create',
    async(req,res,next)=>{
    const {tags} = req.body
  
    if(tags && typeof tags === 'string') {
        req.body.tags = JSON.parse(tags)
    }
    
    next()
    },
    multer.single('thumbnail'),
    (req,res,next)=>{
        console.log(req.body)
        next()
    },
    postValidator,
    validate, 
    createPost)
router.get('/get',getPosts)

module.exports = router