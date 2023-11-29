import React, { useEffect } from "react";
import { Tabla } from "../components/Shared/Table.js";
import { Container, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setArchivosList, setError, setLoading } from "../redux/archivoReducer.js";
import { archivosGet } from "../service/archivo.js";

const Index = () => {
    const dispatch = useDispatch();
    const archivosList = useSelector(state => state.archivos.archivosList);
    const isLoading = useSelector(state => state.archivos.isLoading);
    const error = useSelector(state => state.archivos.error);

    if (archivosList.length > 0) {
        console.log('Estado actual de la app es = archivosList:', archivosList);
    } else if (isLoading === true) {
        console.log('Estado actual de la app es  = Loading...! :', isLoading)
    } else if (error === true) {
        console.log('Estado actual de la app es =  error!! : ', error)
    }

    useEffect(() => {
        dispatch(setLoading(true));
        archivosGet()
            .then(data => {
                dispatch(setArchivosList(data?.archivosFormateados));
            })
            .catch(error => {
                const errorMessage = error?.response?.data?.message || error.message;
                dispatch(setError(errorMessage));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }, [dispatch]);

    return (
        <Container style={{ marginTop: '20px' }}>
            {isLoading && (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}

            {error && (
                <Alert variant="danger">
                    <Alert.Heading>Error!</Alert.Heading>
                    <p>
                        {error}
                    </p>
                </Alert>
            )}

            {!isLoading && !error && <Tabla data={archivosList} />}
        </Container>
    );
};

export default Index;