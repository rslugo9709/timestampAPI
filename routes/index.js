const { Router } = require('express');
const router = Router();


router.get("/api/:date", (req,res) =>{
    try {
        let date = new Date(req.params.date);
        if(date.toUTCString() == "Invalid Date"){
            res.status(400).json({error: "Invalid Date"})
        }
        let unix = date.getTime();
        let utc = date.get

        res.status(200).json({
            unix: unix,
            utc: utc
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
    
})

router.get("/api", (req, res) =>{
    try {
        let date = new Date()
        let unix = date.getTime();
        let utc = date.toUTCString();
        res.status(200).json({
            unix: unix,
            utc: utc
        })
    } catch (error) {
        res.status(500).json(error.message)
    }

})
module.exports = router;