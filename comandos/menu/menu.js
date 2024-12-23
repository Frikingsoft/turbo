import chalk from "chalk"
let menu_principal = [
    {id:1 ,nombre:"Crear",menu:""},
    {id:2 ,nombre:"Cambiar",menu:""},
    {id:3 ,nombre:"Borrar",menu:""},
    {id:4 ,nombre:"Salir",menu:""},
]
let mensaje = chalk.rgb(20, 89, 174).bold("Ingrese una Opción")
let opciones =[
    {
        type:"list",
        name:"opcion",
        message:mensaje,
        choices: menu_principal.map(element => element.nombre)
    }
    
]



export{
    menu_principal,
    opciones
}