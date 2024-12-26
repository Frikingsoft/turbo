import { servidor } from "./config.js"
import { inicio } from "./rutas/get/inicio.js"
import { controlador_inicio } from "./middleware/controlador_inicio.js"
servidor.get("/",controlador_inicio,inicio)