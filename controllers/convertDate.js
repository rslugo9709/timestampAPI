
async function convertDate(req, res){
    try {
        console.log("entra aqui: convertir");
        const {date} = req.query;
        console.log("se imprime lo que se recibe")
        console.log(date);
        console.log("se imprime el tipo de dato")
        console.log(typeof date);

        let fecha = new Date(parseInt(date,10));
        console.log("se procede a imprimir la fecha")
        console.log(fecha);
        if(fecha.toUTCString() == "Invalid Date"){
            fecha = new Date(+req.params.fecha);
            console.log(fecha);
        }
        if(fecha.toUTCString() == "Invalid Date"){
            return res.status(400).json({error: "Invalid Date"})
        }
        
        let unix = fecha.getTime();
        let utc = fecha.toUTCString();

        res.status(200).json({
            unix: unix,
            utc: utc
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
    
}

module.exports = {convertDate};