import React, { useState } from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'

import removeImg from 'assets/images/remove.svg'
import sortDownImg from 'assets/images/sort_down.svg'
import sortUpImg from 'assets/images/sort_up.svg'

export const Field = ({ index, item }) => {
    const [data, setData] = useState(item)

    const handleChange = (e) => {
        console.log('e: ', e)
    }

    return (
        < Form.Group >
            <Form.Row>
                <Col xs={10}>
                    <Card bg="secondary" text="white" body>
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                {data.priority + 1}
                            </Col>
                            <Col>
                                <Form.Control onChange={handleChange} as="select">
                                    <option>Balance</option>
                                    <option>Cash Balance</option>
                                </Form.Control>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center">
                                <Button variant="secondary">
                                    <img src={sortDownImg} alt="sortDown" />
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={2} className="d-flex justify-content-center align-items-center">
                    <Button variant="danger" className="d-flex justify-content-center align-items-center">
                        <img src={removeImg} alt="remove" />
                    </Button>
                </Col>
            </Form.Row>
        </Form.Group >
    )
}