const express = require('express');
const path = require('path'); //Sirve para poder leer nuestras carpetas

const startServer = (options) =>{
    const {port,public_path = 'public'} = options 
    
    const app = express()
    
    //Para poder usar middlewares se debe utilizar .use
    app.use(express.static(public_path)) //Contenido estatico que ponemos disponible

    app.get('*',(req,res)=>{
        const indexPath = path.join(__dirname + `../../${public.path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port,()=>{
        console.log(`Listening on ${port}`)
    })

}

module.exports = {startServer}