import { api } from "./api.js";

export const archivosGet = async () => {
    try {
        const data = await api.get('/file/data').then(res => res.data)
        return data;
    } catch (err) {
        console.log('errorcito', err);
        const message = err?.response?.data?.message || err.message;
        throw new Error(message);
    }
}

export const archivoFileName = async (nombreArchivo) => {
    try {
        const data  = await api.get(`/file/${nombreArchivo}`).then(res => res.data)
        return data;
    } catch (err) {
        const message = err?.response?.data?.message || err.message;
        throw new Error(message);
    }
}