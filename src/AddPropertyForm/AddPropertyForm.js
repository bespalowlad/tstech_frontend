import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { Field } from '../shared'

const AddPropertyForm = () => {
    const [fields, setFields] = useState([])

    const AddField = () => {
        setFields(prevState => [...prevState, {
            priority: undefined,
            property: undefined,
            order: 'ASC'
        }])
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

            {fields.map((item, index) => <Field key={index} item={{ ...item, priority: index }} />)}

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