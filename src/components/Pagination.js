import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { setPage, setLimit } from '../actions/tableActions'
import { CommonButtonStyle } from '../styles/globalStyles'
import { v4 as uuid } from 'uuid'

function Pagination() {
	const dispatch = useDispatch()

	const { page, limit, tableData, dataCount } = useSelector(
		(state) => state.tableReducer
	)
	const totalPages = Math.ceil(dataCount / limit)

	const [isPrevDisabled, setIsPrevDisabled] = useState(true)
	const [isNextDisabled, setIsNextDisabled] = useState(false)

	useEffect(() => {
		if (page < 2) setIsPrevDisabled(true)
		if (page === totalPages) setIsNextDisabled(true)
		if (limit > dataCount) dispatch(setPage(1))
	}, [page, tableData, totalPages, dataCount, dispatch, limit])

	const prevPageHandler = () => {
		dispatch(setPage(page - 1))
		setIsNextDisabled(false)
	}
	const nextPageHandler = () => {
		setIsPrevDisabled(false)
		dispatch(setPage(page + 1))
	}

	const sizeHandler = (e) => {
		dispatch(setLimit(e.target.value))

		setIsNextDisabled(false)
		setIsPrevDisabled(false)
	}

	let options = []
	if (dataCount) {
		for (let i = 0; i < totalPages; i++) {
			options.push(<GotoOption key={uuid()}>{i + 1}</GotoOption>)
		}
	}

	return (
		<PaginationContainer>
			<SizeContainer>
				<SizeLabel htmlFor='size-select'>Size</SizeLabel>
				<SizeSelect value={limit} name='size-select' onChange={sizeHandler}>
					<SizeOption>5</SizeOption>
					<SizeOption>10</SizeOption>
					<SizeOption>25</SizeOption>
					<SizeOption>50</SizeOption>
					<SizeOption>100</SizeOption>
				</SizeSelect>
			</SizeContainer>

			<NavControlContainer>
				<ControlButton disabled={isPrevDisabled} onClick={prevPageHandler}>
					{'<'}
				</ControlButton>
				<GotoSelect
					value={page}
					onChange={(e) => {
						setIsPrevDisabled(false)
						setIsNextDisabled(false)
						dispatch(setPage(e.target.value))
					}}>
					{options}
				</GotoSelect>
				<ControlButton disabled={isNextDisabled} onClick={nextPageHandler}>
					{'>'}
				</ControlButton>
			</NavControlContainer>
		</PaginationContainer>
	)
}

export default Pagination

const CommonSelectStyle = css`
	border-radius: 6px;
	padding: 4px 10px;
	&:focus {
		outline: none;
	}
	border: 1px solid #3f51b5;
`

const PaginationContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: 20px 0px;
`
const ControlButton = styled.button`
	${CommonButtonStyle};
	background-color: #3f51b5;
	border-radius: 6px;
`

const NavControlContainer = styled.div`
	display: flex;
`

const GotoSelect = styled.select`
	${CommonSelectStyle};
`
const GotoOption = styled.option``

const SizeContainer = styled.div``

const SizeSelect = styled.select`
	${CommonSelectStyle};
`

const SizeOption = styled.option``

const SizeLabel = styled.label`
	padding-right: 10px;
	font-weight: bold;
`
