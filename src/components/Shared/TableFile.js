import React from 'react';
import { Table } from "react-bootstrap"

export const TableFile =({data})=>{
    return(
        <Table striped bordered hover>
            <thead style={{ borderBottom: '2px solid black' }}>
                <tr>
                    <th>{'File Name'}</th>
                    <th>{'Text'}</th>
                    <th>{'Number'}</th>
                    <th>{'Hex'}</th>
                </tr>
            </thead>
            {data?.map((archivo, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{archivo.file}</td>
                            <td>{archivo.text}</td>
                            <td>{!archivo.number ? 'empty' : archivo.number}</td>
                            <td>{!archivo.hex ? 'empty' : archivo.hex}</td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    )
}