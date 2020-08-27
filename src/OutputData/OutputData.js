import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

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

OutputData.propTypes = {
    currentDataForm: PropTypes.array.isRequired
}

export default OutputData