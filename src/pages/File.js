
import React from 'react';
import { useParams } from 'react-router-dom';
import { archivoFileName } from '../service/archivo.js';
import { useQuery } from 'react-query';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { TableFile } from '../components/Shared/TableFile.js';

const File = () => {
    const { test } = useParams();

    const { data, isLoading, isError } = useQuery(["archivofilename", archivoFileName], () => archivoFileName(test), {
        refetchOnWindowFocus: false,
        onError: (err) => {
            console.log(err);
        }
    });

    return (
        <Container style={{ marginTop: '20px' }}>
            {isLoading && (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}

            {isError && (
                <Alert variant="danger">
                    <Alert.Heading>Error!</Alert.Heading>
                    <p>
                        ocurrio un error no 
                    </p>
                </Alert>
            )}
            {!isLoading && !isError && <TableFile data={data?.contenidoArchivo}/>}
        </Container>
    );
};

export default File;