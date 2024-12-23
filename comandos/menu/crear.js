import chalk from "chalk"
import fs from 'fs'
import path from 'path'
import { __dirname } from "../../config.js"
import readline  from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let menu_crear = [
    {id:1 ,nombre:"Crear Pagina"},
    {id:2 ,nombre:"Crear Middleware"},
    {id:3 ,nombre:"Crear Controlador"},
    {id:4 ,nombre:"Salir"},
]
let mensaje = chalk.rgb(20, 89, 174).bold("Ingrese una Opción")
let opciones_crear =[
    {
        type:"list",
        name:"opcion_crear",
        message:mensaje,
        choices: menu_crear.map(element => element.nombre)
    }
    
]

const crear_pagina = () => {
    console.log("crear pagina")    
}
const crear_middleware = () => {
    console.log("crear middleware")    
}
const crear_controlador = () => {
    console.log("crear controlador")    
}
export{
    opciones_crear,
    crear_pagina,
    crear_middleware,
    crear_controlador
}
//import { crear_pagina } from "../pagina.js"
/*import inquirer from "inquirer"
import chalk from "chalk"
let menu_crear = [
    {id:1 ,nombre:"Crear Pagina"},
    {id:2 ,nombre:"Crear Middleware"},
    {id:3 ,nombre:"Crear Controlador"},
    {id:4 ,nombre:"Salir"},
]
let mensaje_coso = chalk.rgb(20, 89, 174).bold("Ingrese una Opción")
let opciones_crear =[
    {
        type:"list",
        name:"opcion_crear",
        message:mensaje_coso,
        choices: menu_crear.map(element => element.nombre)
    }
    
]
let opcion_elegida =  await inquirer.prompt(opciones_crear)

console.log("coso :" + opcion_elegida)
export{
    opciones_crear
}
    */