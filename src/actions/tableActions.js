// Action type
export const tableActionType = {
	SAVE: 'SAVE',
	SEARCH_CRITERIA: 'SEARCH_CRITERIA',
	SEARCH_VALUE: 'SEARCH_VALUE',
	SORT_ORDER: 'SORT_ORDER',
	SORT_CRITERIA: 'SORT_CRITERIA',
	PAGE: 'PAGE',
	LIMIT: 'LIMIT',
	COUNT: 'COUNT'
}

// Action Creators
export const saveData = (payload) => {
	return {
		type: tableActionType.SAVE,
		payload,
	}
}

export const setSearchCriteria = (payload) => {
	return {
		type: tableActionType.SEARCH_CRITERIA,
		payload,
	}
}

export const setSearchValue = (payload) => {
	return {
		type: tableActionType.SEARCH_VALUE,
		payload,
	}
}

export const setSortOrder = (payload) => {
	return {
		type: tableActionType.SORT_ORDER,
		payload,
	}
}

export const setSortCriteria = (payload) => {
	return {
		type: tableActionType.SORT_CRITERIA,
		payload,
	}
}

export const setPage = (payload) => {
	return {
		type: tableActionType.PAGE,
		payload,
	}
}

export const setLimit = (payload) => {
	return {
		type: tableActionType.LIMIT,
		payload,
	}
}

export const setDataCount = payload => {
	return {
		type: tableActionType.COUNT,
		payload,
	}
}

