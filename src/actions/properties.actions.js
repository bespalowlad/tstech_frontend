import { ADD_FIELD, UPDATE_FIELD, DELETE_FIELD, TOGGLE_DATA } from '../constants'

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

export const toggleData = (payload) => ({
    type: TOGGLE_DATA,
    payload
})