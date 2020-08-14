import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { propertiesReducer } from '../reducers'

const rootReducer = combineReducers({
    properties: propertiesReducer
})

export const store = createStore(rootReducer, devToolsEnhancer())