import { envs } from './config/env.js';
import { startServer } from './server/server.js'; //EN ES6 Siempre van las extensiones de los archivos cuando importamos


const main = () => {
startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
})
}

//Funcion agnostica autoconvocada(no tiene nombre y se ejecuta con los ultimos parentesis)
( async () => {
    main()
})()

