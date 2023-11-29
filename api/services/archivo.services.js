import axios from "axios";

class ArchivoService {
    constructor() {
        this.baseURL = "https://echo-serv.tbxnet.com/v1/secret";
        this.apiKey = "aSuperSecretKey";
    }

    getArchivos = async () => {
        try {
            const response = await axios.get(`${this.baseURL}/files`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data.files;
        } catch (error) {
            throw new Error("Hubo un problema al obtener los datos.");
        }
    }

    formatearDatos(contenido) {
        const lineas = contenido.split('\n').slice(1); 
        const formattedData = lineas.map(linea => {
            const [file, text, number, hex] = linea.trim().split(',');
            return {
                file,
                text,
                number: parseInt(number),
                hex
            };
        });
        return formattedData;
    }

    descargarArchivo = async (nombreArchivo) => {
        try {
            const contenido = await this.obtenerContenidoArchivo(nombreArchivo);
            const isValid = this.validarFormato(contenido);
            if (!isValid) {
                throw new Error("El formato del archivo no es el esperado o está vacío.");
            }
            const formattedData = this.formatearDatos(contenido);
            return formattedData;
        } catch (error) {
            throw new Error("Hubo un problema al descargar o validar el archivo.");
        }
    }

    obtenerContenidoArchivo = async (nombreArchivo) => {
        try {
            const response = await axios.get(`${this.baseURL}/file/${nombreArchivo}`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error("El archivo está vacío o no se pudo descargar.");
        }
    }

    validarFormato(contenido) {
        const lineas = contenido.split('\n');
        const columnasEsperadas = ['file', 'text', 'number', 'hex'];
        const columnas = lineas[0]?.trim().split(',');
        const formatoCorrecto = columnas?.every(col => columnasEsperadas.includes(col.trim()));
        return formatoCorrecto && lineas.length >= 2;
    }

    archivo = async (nombreArchivo) => {
        try {
            const contenido = await this.obtenerContenidoArchivo(nombreArchivo);
            const isValid = this.validarFormato(contenido);
            if (!isValid) {
                throw new Error("El formato del archivo no es el esperado o está vacío.");
            }
            return contenido.split('\n').map(linea => linea.trim().split(','));
        } catch (error) {
            throw new Error("Hubo un problema al descargar o validar el archivo.");
        }
    }

    getArchivosFormateados = async () => {
        try {
            const archivos = await this.getArchivos();
            const archivosFormateados = [];
            for (const archivo of archivos) {
                try {
                    const contenidoArchivo = await this.archivo(archivo);
                    const formattedLines = contenidoArchivo.map(linea => ({
                        text: linea[1],
                        number: parseInt(linea[2]),
                        hex: linea[3]
                    }));
                    const archivoFormateado = {
                        file: archivo,
                        lines: formattedLines
                    };
                    archivosFormateados.push(archivoFormateado);
                } catch (error) {
                    console.error(`el archivo : ${archivo}: esta vacio`);
                }
            }
            return archivosFormateados;
        } catch (error) {
            throw new Error("Hubo un problema al obtener los datos formateados.");
        }
    }
}

export const archivoService = new ArchivoService();