import fs from 'fs';
import path from 'path';
import { __dirname } from '../../config.js'
import { preguntar_mensaje } from "../turbo.js"

const crear_controlador = async () => {
    try {
        // Pedir al usuario el nombre de la colección
        let opcion = await preguntar_mensaje("Ingrese el nombre de la colección: ");
        
        // Crear la carpeta db si no existe
        const dbPath = path.join(__dirname, 'db')
        if (!fs.existsSync(dbPath)) {
            fs.mkdirSync(dbPath)
        }

        // Crear el archivo para el esquema
        const filePath = path.join(dbPath, `${opcion}.js`)
        const schemaContent = `import mongoose from 'mongoose'

const ${opcion}Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
})

const ${opcion.charAt(0).toUpperCase() + opcion.slice(1)} = mongoose.model('${opcion}', ${opcion}Schema)

export { ${opcion.charAt(0).toUpperCase() + opcion.slice(1)} }
`

        // Escribir el contenido del esquema en el archivo
        fs.writeFileSync(filePath, schemaContent)

        console.log(`Archivo creado en: ${filePath}`)
    } catch (error) {
        console.error("Error al crear el archivo de la colección:", error)
    }
    process.exit()
}

export {
    crear_controlador
}