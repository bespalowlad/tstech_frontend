import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Col } from 'react-bootstrap'
import { Field } from '../shared'
import { addField, updateField, toggleData } from '../actions'

const AddPropertyForm = ({ currentDataForm }) => {
    const dispatch = useDispatch()
    const properties = useSelector(state => state.properties.data)

    useEffect(() => {
        dispatch(toggleData(false))
    }, [currentDataForm, dispatch])

    const handleAddField = () => {
        const index = currentDataForm.length + 1
        dispatch(addField(index))
    }

    const handleUpdateField = (newField) => {
        const newFields = currentDataForm.map(item => {
            if (item.priority === newField.priority) {
                return { ...newField }
            }
            return item
        })

        dispatch(updateField(newFields))
    }

    const handleDeleteField = (priority) => {
        const newFields = currentDataForm.filter(item => item.priority !== priority)
        dispatch(updateField(newFields))
    }

    const isDisableAddButton = () => {
        return currentDataForm &&
            currentDataForm.some(field => field.property === 'empty') ||
            currentDataForm.length === properties.length
    }

    const isDisalbleSubmitButton = () => {
        return currentDataForm.length === 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(toggleData(true))
    }

    return (
        <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
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

            {currentDataForm.map(item => (
                <Field key={item.priority} item={item} updateField={handleUpdateField} deleteField={handleDeleteField} />
            ))}

            <Form.Group>
                <Button onClick={handleAddField} variant="outline-success" disabled={isDisableAddButton()}>Add property</Button>
            </Form.Group>

            <Form.Group>
                <Button variant="primary" type="submit" disabled={isDisalbleSubmitButton()}>Sort</Button>
            </Form.Group>
        </Form>
    )
}

export default AddPropertyForm