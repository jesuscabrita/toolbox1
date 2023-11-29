import routerArchivos from "./archivos.js";

export const  plugin_Rutas = (app) => {
    app.use("/api/file", routerArchivos);
}