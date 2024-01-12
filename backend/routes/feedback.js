const router = require('express').Router();

router.post('/feedback-store', (req, res)=>{
    console.log("--------------------",req.body)
    try{
        
        res.status(200).send({
            success : true,
            message : "Feedback Sended Successfully!"
        })
    }catch(err){
        console.log(err);
        return res.status(403).send({
            success : false,
            message : "Something Went Wrong."
        })
    }
})



module.exports = router