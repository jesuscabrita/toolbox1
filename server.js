import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { plugin_Rutas } from "./api/router/routes.js";
import compression from "express-compression";
import morgan from "morgan";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));
app.use(cors());
app.use(compression({ brotli: { enabled: true, zlib: {} } }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

plugin_Rutas(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor corre en el puerto ${PORT}`);
});