import fs from 'fs'
import path from 'path'
import { __dirname } from '../../config.js'
import { preguntar_mensaje } from "../turbo.js"

const crear_middleware = async () => {
    try {
        // Solicitar el nombre del middleware
        let opcion = await preguntar_mensaje("Ingrese el nombre del Middleware")

        // Validar el nombre
        if (!opcion || opcion.trim() === '') {
            console.log("El nombre del Middleware no puede estar vacío.")
            return
        }

        // Asegurarse de que no tenga caracteres inválidos para un archivo
        opcion = opcion.trim().replace(/[^a-zA-Z0-9_\-]/g, '_')

        // Definir la ruta del directorio y archivo
        const directorioMiddleware = path.join(__dirname, "middleware")
        const rutaArchivo = path.join(directorioMiddleware, `${opcion}.js`)

        // Crear el directorio si no existe
        if (!fs.existsSync(directorioMiddleware)) {
            fs.mkdirSync(directorioMiddleware, { recursive: true })
            console.log(`Directorio creado: ${directorioMiddleware}`)
        }

        // Contenido del archivo
        const contenido = `const ${opcion} = (req, res, next) => {
    
}
export{
    ${opcion}
}
`

        // Crear y guardar el archivo
        fs.writeFileSync(rutaArchivo, contenido, 'utf8')
        console.log(`El archivo '${opcion}.js' ha sido creado en ${rutaArchivo}`);
    } catch (error) {
        console.error("Ocurrió un error:", error.message)
    }
    process.exit()
}

export {
    crear_middleware
}
