import { ADD_FIELD, UPDATE_FIELD, DELETE_FIELD } from '../constants'

export const addField = (index) => ({
    type: ADD_FIELD,
    index
})

export const updateField = (fields) => ({
    type: UPDATE_FIELD,
    fields
})

export const deleteField = (priority) => ({
    type: DELETE_FIELD,
    priority
})