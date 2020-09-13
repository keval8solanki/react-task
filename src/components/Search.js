import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { CommonButtonStyle } from '../styles/globalStyles'
import { v4 as uuid } from 'uuid'

function Search({ params }) {
	const dispatch = useDispatch()
	const { searchCriteria, setSearchCriteria, setSearchValue } = params

	const [value, setValue] = useState('')
	const [criteria, setCriteria] = useState('')

	const searchHandler = (e) => {
		e.preventDefault()
		dispatch(setSearchCriteria(criteria))
		dispatch(setSearchValue(value))
		setValue('')
	}
	const clearSearchHandler = () => {
		dispatch(setSearchCriteria('id'))
		dispatch(setSearchValue(''))
		setValue('')
		setCriteria('id')
	}

	const renderOption =
		searchCriteria &&
		searchCriteria.map((item) => (
			<SearchOption key={uuid()}>{item.toUpperCase()}</SearchOption>
		))
	return (
		<SearchForm onSubmit={searchHandler}>
			<SearchCriteria
				value={criteria}
				onChange={(e) => setCriteria(e.target.value)}>
				{renderOption}
			</SearchCriteria>

			<SearchInput
				type='text'
				value={value}
				placeholder='Type Here...'
				onChange={(e) => setValue(e.target.value)}
			/>

			<SearchButton type='submit'>Search</SearchButton>
			<SearchClearButton onClick={clearSearchHandler}>Clear</SearchClearButton>
		</SearchForm>
	)
}

export default Search

const SearchForm = styled.form`
	width: fit-content;
	display: flex;
	margin: 20px 0px;
`
const SearchInput = styled.input`
	padding: 5px 10px;

	border-style: none;
	border-bottom: 2px solid black;
	transition: all 0.5s;
	&:focus {
		border-bottom: 2px solid green;
		outline: none;
	}
`

const SearchCriteria = styled.select`
	${CommonButtonStyle};
	background-color: #3f51b5;
`
const SearchOption = styled.option``
const SearchButton = styled.button`
	${CommonButtonStyle};
	background-color: #3f51b5;
`

const SearchClearButton = styled.button`
	${CommonButtonStyle};
	background-color: #e91e63;
`
