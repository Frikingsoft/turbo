import fs from 'fs'
import path from 'path'
import { __dirname } from "../../config.js"
import { preguntar_mensaje, enviar_mensaje} from "../turbo.js"
let pagina
let ruta
let tipo_ruta
let middle
let middleware

let menu_pagina=[
    {id:1, nombre:"GET"},
    {id:2, nombre:"POST"},
    {id:3, nombre:"PUT"},
    {id:2, nombre:"DELETE"}
]
let mensaje="Ingrese una Opción"


const crear_pagina=async()=>{
    tipo_ruta= await enviar_mensaje(mensaje,menu_pagina)
    pagina = await preguntar_mensaje("Ingrese el nombre de la Pagina")
    ruta = await preguntar_mensaje("Ingrese el nombre de la Ruta")
    middle = await preguntar_mensaje("Quiere agregar un middleware S/N")
    if(middle.toLowerCase()=== "s"){
        middleware = await preguntar_mensaje("Ingrese el nombre del Middleware")
    }
    let contenido=`const ${pagina} = (req,res)=>{
    
}
export{
    ${pagina}
}
`   
    tipo_ruta = path.join(__dirname, 'rutas',tipo_ruta)
    crear_carpeta(tipo_ruta)
    crear_nuevo(pagina,contenido)
    controlador(middleware)
    process.exit()
}

let crear_nuevo =(pagina , contenido)=>{
    let archivo= path.join(tipo_ruta, `${pagina}.js`);
    if(!fs.existsSync(tipo_ruta)){
        fs.mkdirSync(tipo_ruta, { recursive: true }) // Crea el directorio si no existe
    } 
    try {
        fs.writeFileSync(archivo, contenido, { flag: 'w' }) // Crea un archivo vacío o sobrescribe si ya existe
        console.log(`Archivo creado en: ${archivo}`)
    } catch (error) {
        console.error(`Error al crear el archivo: ${error.message}`)
    }
}
const crear_carpeta = (nombreCarpeta) => {
    const rutaCarpeta = path.resolve(nombreCarpeta); // Resuelve la ruta absoluta
    if (!fs.existsSync(rutaCarpeta)) {
        fs.mkdirSync(rutaCarpeta, { recursive: true }); // Crea la carpeta si no existe
        console.log(`Carpeta creada en: ${rutaCarpeta}`);
    } else {
        console.log(`La carpeta ya existe: ${rutaCarpeta}`);
    }

}
const controlador=(middleware)=>{
   let carpeta_controlador = path.join(__dirname, 'controlador')
   crear_nuevo(carpeta_controlador,middleware)
   
}
export{
    crear_pagina
}