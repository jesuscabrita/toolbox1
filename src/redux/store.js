import { configureStore } from "@reduxjs/toolkit";
import archivoReducer from "./archivoReducer.js";

const store = configureStore({
    reducer: {
        archivos: archivoReducer,
    },
});

export default store;
