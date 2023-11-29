import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Tabla = ({data}) => {
    const navigate = useNavigate();

    const handleClick = (file) => {
        navigate(`/file/${file}`); 
    };

    return (
        <Table striped bordered hover>
            <thead style={{ borderBottom: '2px solid black' }}>
                <tr>
                    <th>{'File Name'}</th>
                </tr>
            </thead>

            {data?.map((archivo, index) =>{
                return(
                    <tbody key={index} onClick={() => handleClick(archivo.file)} style={{cursor:'pointer'}}> 
                        <tr>
                            <td>{archivo.file}</td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    );
};