const {check,validationResult} = require('express-validator')


exports.postValidator =[
    check("title").trim().not().notEmpty().withMessage('Post title is missing'),
    check("content").trim().not().notEmpty().withMessage('Post content is missing'),
    check("meta").trim().not().notEmpty().withMessage('meta description is missingg'),
    check("slug").trim().not().notEmpty().withMessage('post slug is missing'),
    check("tags").isArray().withMessage('tags must be array of string').custom((tags)=>{
        for(let tag of tags){
            if(typeof tag !== 'string'){
                throw Error('tags must be array of string')
            }
        }
        return true
    })
]

exports.validate = (req, res, next)=>{
    const error = validationResult(req).array()
    if(error.length){
        return res.status(401).json({error:error[0].msg})
    }
    next()
}