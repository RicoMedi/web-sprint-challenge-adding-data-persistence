// build your `/api/resources` router here
const router= require('express').Router()


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'hello from resource router'
    })

})

module.exports= router