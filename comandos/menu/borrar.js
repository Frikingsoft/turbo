import chalk from "chalk"
let menu_borrar = [
    {id:1 ,nombre:"Borrar Pagina"},
    {id:2 ,nombre:"Borrar Middleware"},
    {id:3 ,nombre:"Borrar Controlador"},
    {id:4 ,nombre:"Salir"},
]
let mensaje = chalk.rgb(20, 89, 174).bold("Ingrese una Opción")
let opciones_borrar =[
    {
        type:"list",
        name:"opcion_crear",
        message:mensaje,
        choices: menu_borrar.map(element => element.nombre)
    }
    
]
const borrar_pagina = () => {
    console.log("borrar pagina")    
}
const borrar_middleware = () => {
    console.log("borrar middleware")    
}
const borrar_controlador = () => {
    console.log("borrar controlador")    
}
export{
   opciones_borrar,
   borrar_pagina,
   borrar_middleware,
   borrar_controlador
}