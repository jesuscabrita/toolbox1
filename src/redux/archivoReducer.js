import { createSlice } from "@reduxjs/toolkit";

const archivoSlice = createSlice({
    name: "archivos",
    initialState: {
        archivosList: [],
        error: null,
        isLoading: false,
    },
    reducers: {
        setArchivosList(state, action) {
            state.archivosList = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { setArchivosList, setError, setLoading } = archivoSlice.actions;
export default archivoSlice.reducer;