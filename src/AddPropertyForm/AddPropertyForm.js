import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { Field } from '../shared'

const AddPropertyForm = () => {
    const [fields, setFields] = useState([])

    const AddField = () => {
        const index = fields.length + 1

        setFields(prevState => [...prevState, {
            priority: index,
            property: undefined,
            order: 'ASC'
        }])
    }

    const updateField = (newField) => {
        const updatedFields = fields.map(field => {
            if (field.priority === newField.priority) {
                field = newField
            }
            return field
        })

        setFields(updatedFields)
    }

    const deleteField = (priority) => {
        setFields(fields.filter(item => item.priority != priority))
    }

    return (
        <Form style={{ width: '100%' }}>
            <Form.Group>
                <Form.Row>
                    <Col xs={2}></Col>
                    <Col xs={6} className="p-0">
                        <Form.Text as={'h5'}>Properties</Form.Text>
                    </Col>
                    <Col xs={2}>
                        <Form.Text as={'h5'}>Order</Form.Text>
                    </Col>
                    <Col xs={2}></Col>
                </Form.Row>
            </Form.Group>

            {fields.map(item => (
                <Field key={item.priority} item={item} updateField={updateField} deleteField={deleteField} />
            ))}

            <Form.Group>
                <Button onClick={AddField} variant="outline-success">Add property</Button>
            </Form.Group>

            <Form.Group>
                <Button variant="primary" type="submit">Sort</Button>
            </Form.Group>
        </Form>
    )
}

export default AddPropertyForm