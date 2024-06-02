const { Router } = require('express');
const router = Router();

const {getDate} = require("../controllers/getDate")
const {convertDate} = require("../controllers/convertDate")

router.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

router.get("/api/:date?", convertDate);
router.get("/api", getDate);



module.exports = router;