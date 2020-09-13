import { combineReducers } from 'redux'
import TableReducer from './tableReducer'

const RootReducer = combineReducers({
	tableReducer: TableReducer,
})

export default RootReducer
