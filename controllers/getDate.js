
async function getDate(req, res){
    try {
        console.log("entra aqui: fecha actual");
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
    
}

module.exports = {getDate};