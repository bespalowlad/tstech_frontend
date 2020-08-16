import React from 'react'
import { Table } from 'react-bootstrap'

const OutputData = ({ currentDataForm }) => (
    <Table striped bordered hover className="mt-5">
        <thead>
            <tr>
                <th>Prority</th>
                <th>Property</th>
                <th>Order</th>
            </tr>
        </thead>
        <tbody>
            {currentDataForm.map(item => (
                <tr key={item.priority}>
                    <td>{item.priority}</td>
                    <td>{item.property}</td>
                    <td>{item.order}</td>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default OutputData