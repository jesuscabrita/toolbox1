import { archivoService } from "../services/archivo.services.js";

export const getArchivosFormateados = async (req, res) => {
    try {
        const archivosFormateados = await archivoService.getArchivosFormateados();
        console.log('archivosFormateados',archivosFormateados);
        res.set('Content-Type', 'application/json'); ;
        res.status(200).send({ archivosFormateados });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const descargarArchivos = async (req, res) => {
    const { nombreArchivo } = req.params; 
    try {
        const contenidoArchivo = await archivoService.descargarArchivo(nombreArchivo);
        res.set('Content-Type', 'application/json'); 
        res.status(200).send({ contenidoArchivo });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
