#!/usr/bin/env node
import inquirer from "inquirer"
import { opciones }  from "./menu/menu.js"
import { opciones_crear,crear_pagina,crear_middleware,crear_controlador} from "./menu/crear.js"
import { opciones_cambiar,cambiar_pagina,cambiar_middleware,cambiar_controlador} from "./menu/cambiar.js"
import { opciones_borrar,borrar_pagina,borrar_middleware,borrar_controlador} from "./menu/borrar.js"
let opcion_elegida

const mostrar_menu = async()=>{
    
    opcion_elegida =  await inquirer.prompt(opciones)
    let elegir
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