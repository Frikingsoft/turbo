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

const controlador_rutas = path.join(__dirname , "index.js")

const crear_pagina=async()=>{
    tipo_ruta= await enviar_mensaje(mensaje,menu_pagina)
    pagina = await preguntar_mensaje("Ingrese el nombre de la Pagina")
    ruta = await preguntar_mensaje("Ingrese el nombre de la Ruta")
    middle = await preguntar_mensaje("Quiere agregar un middleware S/N")
    if(middle.toLowerCase()=== "s"){
        middleware = await preguntar_mensaje("Ingrese el nombre del Middleware")
        let ruta_middle= path.join(__dirname, 'middleware')
        let contenido = `const ${middleware} = (req, res, next) => {
            
}
export{
    ${middleware}
}
`
        crear_nuevo(middleware,ruta_middle,contenido)
    }
    let contenido=`const ${pagina} = (req,res)=>{
    
}
export{
    ${pagina}
}
`   
    const ruta_metodo = path.join(__dirname, 'rutas',tipo_ruta)
   
    crear_carpeta(ruta_metodo.toLowerCase())
    crear_nuevo(pagina,ruta_metodo,contenido)
    controlador(tipo_ruta,ruta,pagina)    
    process.exit()
}

let crear_nuevo =(pagina ,tipo_ruta, contenido)=>{
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
const controlador=(tipo_ruta,ruta,pagina)=>{
    tipo_ruta = tipo_ruta.toLowerCase()
    let contenido_rutas
    contenido_rutas=`\nimport { ${pagina} } from "./rutas/${tipo_ruta}/${pagina}.js"`
    contenido_rutas+=`\nimport { ${middleware} } from "./middleware/${middleware}.js"`
    middleware!=null || undefined
    ? contenido_rutas += `\nservidor.${tipo_ruta}("${ruta}",${middleware},${pagina})`
    : contenido_rutas += `\nservidor.${tipo_ruta}("${ruta}",${pagina})`

    try {
        // Verifica si el archivo existe
        if (!fs.existsSync(controlador_rutas)) {
            console.error('El archivo index.js no existe en la ruta:', controlador_rutas);
            return;
        }

        // Agrega contenido al archivo
        fs.appendFileSync(controlador_rutas, contenido_rutas);
        console.log('Contenido agregado exitosamente a:', controlador_rutas);
    } catch (error) {
        console.error('Error al agregar contenido:', error.message);
    }
}
export{
    crear_pagina
}