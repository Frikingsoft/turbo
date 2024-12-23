import chalk from "chalk"
import inquirer from "inquirer"
let menu_cambiar = [
    {id:1 ,nombre:"Cambiar Pagina"},
    {id:2 ,nombre:"Cambiar Middleware"},
    {id:3 ,nombre:"Cambiar Controlador"},
    {id:4 ,nombre:"Salir"},
]
let mensaje = chalk.rgb(20, 89, 174).bold("Ingrese una Opción")
let opciones_cambiar =[
    {
        type:"list",
        name:"opcion_crear",
        message:mensaje,
        choices: menu_cambiar.map(element => element.nombre)
    }
    
]
const cambiar_pagina = () => {
    console.log("cambiar pagina")    
}
const cambiar_middleware = () => {
    console.log("cambiar middleware")    
}
const cambiar_controlador = () => {
    console.log("cambiar controlador")    
}
export{
    opciones_cambiar,
    cambiar_pagina,
    cambiar_middleware,
    cambiar_controlador
    
}