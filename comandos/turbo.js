#!/usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer"
import { mensaje_menu, menu_principal }  from "./menu/menu.js"
import { crear } from "./menu/crear.js"
const enviar_mensaje=async(mensaje,lista)=>{
    mensaje = chalk.rgb(20, 89, 174).bold(mensaje)
    let opciones =[
        {
            type:"list",
            name:"opcion",
            message:mensaje,
            choices: lista.map(element => element.nombre)
        }
        
    ]
    const respuesta = await inquirer.prompt(opciones)
    return respuesta.opcion
    
}
const preguntar_mensaje = async (mensaje) => {
    mensaje = chalk.rgb(20, 89, 174).bold(mensaje);
    let pregunta = [
        {
            type: "input",
            name: "respuesta",
            message: mensaje,
        },
    ];
    const respuesta = await inquirer.prompt(pregunta);
    return respuesta.respuesta
}
const menu = async()=>{
    const opcion = await enviar_mensaje(mensaje_menu,menu_principal)
    switch (opcion) {
        case "Crear":
            crear()
            break
        /*if(opcion_elegida.opcion_crear === "Crear Pagina"){
            crear_pagina()
        }
        if(opcion_elegida.opcion_crear === "Crear Middleware"){
            crear_middleware()
        }
        if(opcion_elegida.opcion_crear === "Crear Controlador"){
            crear_controlador()
        }
            break
        case "Cambiar":
            opcion_elegida = await inquirer.prompt(opciones_cambiar)
            if(opcion_elegida.opcion_crear === "Cambiar Pagina"){
                cambiar_pagina()
            }
            if(opcion_elegida.opcion_crear === "Cambiar Middleware"){
                cambiar_middleware()
            }
            if(opcion_elegida.opcion_crear === "Cambiar Controlador"){
                cambiar_controlador()
            }   
        break
        case "Borrar":
            opcion_elegida = await inquirer.prompt(opciones_borrar)
            if(opcion_elegida.opcion_crear === "Borrar Pagina"){
                borrar_pagina()
            }
            if(opcion_elegida.opcion_crear === "Borrar Middleware"){
                borrar_middleware()
            }
            if(opcion_elegida.opcion_crear === "Borrar Controlador"){
                borrar_controlador()
            }      
            break*/
        default:
            break
    }      
}
menu()
/*import inquirer from "inquirer"
import chalk from "chalk"
import { mensaje_menu, menu_principal }  from "./menu/menu.js"
import { opciones_crear,crear_pagina,crear_middleware,crear_controlador} from "./menu/crear.js"
import { opciones_cambiar,cambiar_pagina,cambiar_middleware,cambiar_controlador} from "./menu/cambiar.js"
import { opciones_borrar,borrar_pagina,borrar_middleware,borrar_controlador} from "./menu/borrar.js"
let opciones
const enviar_mensaje=(mensaje,lista)=>{
    mensaje = chalk.rgb(20, 89, 174).bold(mensaje)
    opciones =[
        {
            type:"list",
            name:"opcion",
            message:mensaje,
            choices: lista.map(element => element.nombre)
        }
        
    ]
    return opciones
}

let opcion_elegida

const mostrar_menu = async()=>{
    enviar_mensaje(mensaje_menu,menu_principal)
    opcion_elegida =  await inquirer.prompt(opciones)
    
    switch (opcion_elegida.opcion) {
        case "Crear":
            //opciones_crear   
        // opciones_crear
        opcion_elegida =  await inquirer.prompt(opciones_crear)
        if(opcion_elegida.opcion_crear === "Crear Pagina"){
            crear_pagina()
        }
        if(opcion_elegida.opcion_crear === "Crear Middleware"){
            crear_middleware()
        }
        if(opcion_elegida.opcion_crear === "Crear Controlador"){
            crear_controlador()
        }
            break
        case "Cambiar":
            opcion_elegida = await inquirer.prompt(opciones_cambiar)
            if(opcion_elegida.opcion_crear === "Cambiar Pagina"){
                cambiar_pagina()
            }
            if(opcion_elegida.opcion_crear === "Cambiar Middleware"){
                cambiar_middleware()
            }
            if(opcion_elegida.opcion_crear === "Cambiar Controlador"){
                cambiar_controlador()
            }   
        break
        case "Borrar":
            opcion_elegida = await inquirer.prompt(opciones_borrar)
            if(opcion_elegida.opcion_crear === "Borrar Pagina"){
                borrar_pagina()
            }
            if(opcion_elegida.opcion_crear === "Borrar Middleware"){
                borrar_middleware()
            }
            if(opcion_elegida.opcion_crear === "Borrar Controlador"){
                borrar_controlador()
            }      
            break
        default:
            break
    }      
}

mostrar_menu()
*/
export{
    enviar_mensaje,
    preguntar_mensaje
}
