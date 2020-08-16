import React from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import removeImg from 'assets/images/remove.svg'
import sortDownImg from 'assets/images/sort_down.svg'
import sortUpImg from 'assets/images/sort_up.svg'

export const Field = ({ item, updateField, deleteField }) => {
    const properties = useSelector(state => state.properties.data)
    const dataForm = useSelector(state => state.properties.currentDataForm)

    const handleChange = (e) => {
        const property = e.target.value
        const { orderTypeDefault: order } = properties.find(item => item.name === property)
        updateField({ ...item, order, property })
    }

    const updateOrderParam = () => {
        const order = item.order === 'ASC' ? 'DESC' : 'ASC'
        updateField({ ...item, order })
    }

    const isDisableAttr = (item) => {
        return dataForm.some(field => field.property === item.name)
    }

    return (
        < Form.Group >
            <Form.Row>
                <Col xs={10}>
                    <Card bg="secondary" text="white" body>
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                {item.priority}
                            </Col>
                            <Col>
                                <Form.Control onChange={handleChange} value={item.property} as="select">
                                    <option value={'empty'} disabled>Choose...</option>
                                    {properties.map(item => (
                                        <option key={item.name} value={item.name} disabled={isDisableAttr(item)}>{item.title}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center">
                                <Button onClick={updateOrderParam} variant="secondary">
                                    {item.order === 'ASC' ?
                                        <img src={sortDownImg} alt="sortDown" /> :
                                        <img src={sortUpImg} alt="sortUp" />
                                    }
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={2} className="d-flex justify-content-center align-items-center">
                    <Button onClick={() => deleteField(item.priority)} variant="danger" className="d-flex justify-content-center align-items-center">
                        <img src={removeImg} alt="remove" />
                    </Button>
                </Col>
            </Form.Row>
        </Form.Group >
    )
}