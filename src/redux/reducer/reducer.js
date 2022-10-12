import { combineReducers } from "redux"

export const rootReducer = () => {
    combineReducers({
        router: connectRouter(history)
    })
}