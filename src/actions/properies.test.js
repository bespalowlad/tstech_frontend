import { ADD_FIELD, UPDATE_FIELD, DELETE_FIELD, TOGGLE_DATA } from '../constants'
import * as actions from './properties.actions'

describe('Actions', () => {
    it('Add field', () => {
        const index = 0
        const expectedAction = {
            type: ADD_FIELD,
            index
        }

        expect(actions.addField(index)).toEqual(expectedAction)
    })

    it('Update field', () => {
        const fields = [
            {
                priority: 0,
                property: 'empty',
                order: 'ASC'
            }
        ]
        const expectedAction = {
            type: UPDATE_FIELD,
            fields
        }

        expect(actions.updateField(fields)).toEqual(expectedAction)
    })

    it('Delete field', () => {
        //
    })

    it('Toggle data', () => {
        const payload = true
        const expectedAction = {
            type: TOGGLE_DATA,
            payload
        }

        expect(actions.toggleData(payload)).toEqual(expectedAction )
    })
})