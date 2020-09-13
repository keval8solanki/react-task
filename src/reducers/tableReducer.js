import { tableActionType } from '../actions/tableActions'

const initialState = {
	page: 1,
	limit: 10,
	sortCriteria: 'id',
	sortOrder: 'asc',
	searchCriteria: 'id',
	searchValue: '',
	tableData: null,
	dataCount: null,
	headings: null,
}

const tableReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case tableActionType.SAVE:
			const headings = Object.keys(payload[0])
			return {
				...state,
				tableData: payload,
				headings,
			}

		case tableActionType.SEARCH_VALUE:
			return {
				...state,
				searchValue: payload,
			}

		case tableActionType.SEARCH_CRITERIA:
			return {
				...state,
				searchCriteria: payload,
			}

		case tableActionType.SORT_CRITERIA:
			return {
				...state,
				sortCriteria: payload,
			}

		case tableActionType.SORT_ORDER:
			return {
				...state,
				sortOrder: payload,
			}

		case tableActionType.PAGE:
			return {
				...state,
				page: Number(payload),
			}

		case tableActionType.LIMIT:
			return {
				...state,
				limit: Number(payload),
			}

		case tableActionType.COUNT:
			return {
				...state,
				dataCount: Number(payload),
			}

		default:
			return state
	}
}
export default tableReducer
