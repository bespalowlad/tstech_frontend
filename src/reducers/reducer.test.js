import { initialState, propertiesReducer } from './properties.reducer'
import { ADD_FIELD, UPDATE_FIELD, TOGGLE_DATA } from '../constants/properties.constants'

describe('Reducer', () => {
    it('Add field', () => {
        const action = {
            type: ADD_FIELD,
            index: 0
        }

        expect(propertiesReducer(initialState, action)).toEqual({
            ...initialState,
            currentDataForm: [
                ...initialState.currentDataForm,
                {
                    priority: action.index,
                    property: 'empty',
                    order: 'ASC'
                }
            ]
        })
    })

    it('Update field', () => {
        const action = {
            type: UPDATE_FIELD,
            fields: [
                {
                    priority: 0,
                    property: 'empty',
                    order: 'ASC'
                }
            ]
        }

        expect(propertiesReducer(initialState, action)).toEqual({
            ...initialState,
            currentDataForm: action.fields
        })
    })

    it('Toggle data', () => {
        const action = {
            type: TOGGLE_DATA,
            payload: true
        }

        expect(propertiesReducer(initialState, action)).toEqual({
            ...initialState,
            dataSubmitted: action.payload
        })
    })
})