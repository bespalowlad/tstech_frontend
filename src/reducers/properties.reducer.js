import { ADD_FIELD, UPDATE_FIELD, TOGGLE_DATA } from '../constants'

const initialState = {
    data: JSON.parse(`[{
        "name": "affiliate",
        "title": "Affiliate",
        "orderTypeDefault": "ASC",
        "priority": 0
    }, {
        "name": "balance",
        "title": "Balance",
        "orderTypeDefault": "DESC",
        "priority": 0
    }, {
        "name": "bonus_balance",
        "title": "Bonus balance",
        "orderTypeDefault": "DESC",
        "priority": 0
    }, {
        "name": "campaign",
        "title": "Campaign",
        "orderTypeDefault": "ASC",
        "priority": 0
    }, {
        "name": "cash_balance",
        "title": "Cash balance",
        "orderTypeDefault": "DESC",
        "priority": 0
    }, {
        "name": "country",
        "title": "Country",
        "orderTypeDefault": "ASC",
        "priority": 0
    }, {
        "name": "trader_points",
        "title": "Trader points",
        "orderTypeDefault": "DESC",
        "priority": 0
    }]`),
    currentDataForm: [],
    dataSubmitted: false
}

export const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIELD:
            return {
                ...state,
                currentDataForm: [
                    ...state.currentDataForm,
                    {
                        priority: action.index,
                        property: 'empty',
                        order: 'ASC'
                    }
                ]
            }

        case UPDATE_FIELD:
            return {
                ...state,
                currentDataForm: action.fields
            }

        case TOGGLE_DATA:
            return {
                ...state,
                dataSubmitted: action.payload
            }

        default:
            return state
    }
}