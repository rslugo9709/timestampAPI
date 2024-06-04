
async function convertDate(req, res){
    try {

        const {date} = req.query;
        if(!date){
            console.log("entra aqui: fecha actual");
            let fecha = new Date()
            let unix = fecha.getTime();
            let utc = fecha.toUTCString();
            return res.status(200).json({
                unix: unix,
                utc: utc
            })
        }


        console.log("entra aqui: convertir");
        
        let fecha = '';
        if(date.includes("-")){
            fecha = new Date(date);
        }else{
            fecha = new Date(parseInt(date,10));
        }
        
        
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