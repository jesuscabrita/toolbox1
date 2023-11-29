import express from "express";
import { descargarArchivos, getArchivosFormateados } from "../controllers/archivo.controllers.js";

const router = express.Router();

router.get("/data", getArchivosFormateados);
router.get("/:nombreArchivo", descargarArchivos);

export default router;