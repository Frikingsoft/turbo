#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { __dirname } from "../config.js"
import inquirer from "inquirer"

/*
let argumentos = process.argv.slice(2)

let directorio = path.join(__dirname, 'rutas');


const pagina =()=>{
    let crear_pagina = argumentos[1]
    let archivo= path.join(directorio, crear_pagina);
    if(!fs.existsSync(directorio)){
        fs.mkdirSync(directorio, { recursive: true }) // Crea el directorio si no existe
    } 
    try {
        fs.writeFileSync(archivo, '', { flag: 'w' }); // Crea un archivo vacío o sobrescribe si ya existe
        console.log(`Archivo creado en: ${archivo}`);
    } catch (error) {
        console.error(`Error al crear el archivo: ${error.message}`);
    }
    
}

argumentos[0] ==="pagina" 
? pagina() :
console.log("faltan argumentos")



console.log(argumentos)
*/