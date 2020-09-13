import React, { useEffect } from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import Table from '../components/Table'
import { API_URI } from '../api/endpoints'
import Axios from 'axios'
import {
	Layout,
	removeSpacing,
	TableData,
	TableHead,
	TableHeadContainer,
	TableHeadTitle,
	TableRow,
} from '../styles/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import {
	saveData,
	setDataCount,
	setSearchCriteria,
	setSearchValue,
	setSortCriteria,
	setSortOrder,
} from '../actions/tableActions'

import { NavLink } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

import SortIcon from '../assets/icons/sort.svg'
function Home() {
	const dispatch = useDispatch()
	const {
		tableData,
		page,
		limit,
		searchCriteria,
		searchValue,
		sortCriteria,
		sortOrder,
		headings,
	} = useSelector((state) => state.tableReducer)
	//Params

	let endpoint = `${API_URI}/shipments?${searchCriteria.toLowerCase()}_like=${searchValue}&_page=${page}&_limit=${limit}&_sort=${sortCriteria.toLowerCase()}&_order=${sortOrder}`

	console.log(endpoint)
	useEffect(() => {
		Axios.get(endpoint)
			.then((res) => {
				const data = res.data

				const count = res.headers['x-total-count']
				dispatch(setDataCount(count))
				dispatch(saveData(data))
				// setTableHeading(Object.keys(data[0]))
			})
			.catch((e) => console.log(e))
	}, [
		page,
		limit,
		sortCriteria,
		searchCriteria,
		searchValue,
		sortOrder,
		sortCriteria,
		endpoint,
		dispatch,
	])

	const sortHandler = (criteria) => {
		if (sortCriteria === criteria) {
			if (sortOrder === 'asc') {
				dispatch(setSortOrder('desc'))
			} else {
				dispatch(setSortOrder('asc'))
			}
		} else {
			dispatch(setSortCriteria(criteria))
		}
	}

	const renderTableHeading =
		headings &&
		headings.map((heading) => (
			<TableHead onClick={() => sortHandler(heading)} key={uuid()}>
				<TableHeadContainer>
					<TableHeadTitle>{heading.toUpperCase()}</TableHeadTitle>
					<img src={SortIcon} alt='Sort Icon' />
				</TableHeadContainer>
			</TableHead>
		))

	const renderTableData =
		tableData &&
		tableData.map((data) => {
			return (
				<TableRow key={uuid()}>
					<TableData>{data.id}</TableData>
					<TableData>{data.name}</TableData>
					<TableData>
						<NavLink to={`cargo/${data.id}`}>View</NavLink>
					</TableData>
					<TableData>{data.mode}</TableData>
					<TableData>{data.type}</TableData>
					<TableData>{data.destination}</TableData>
					<TableData>{data.origin}</TableData>
					<TableData>
						<ServicesUL>
							{data.services.map(({ type }) => (
								<li key={uuid()}>{type}</li>
							))}
						</ServicesUL>
					</TableData>
					<TableData>{data.total}</TableData>
					<TableData>{data.status}</TableData>
					<TableData>{data.userId}</TableData>
				</TableRow>
			)
		})

	const params = {
		setSearchCriteria: setSearchCriteria,
		setSearchValue: setSearchValue,
		searchCriteria: headings,
	}

	return (
		<>
			{tableData ? (
				<HomeContainer>
					<Layout>
						<TableHeader>
							<h1>Shipments</h1>
							<Search params={params} />
						</TableHeader>
						<Table headings={renderTableHeading}>{renderTableData}</Table>
						<TableFooter>
							<Pagination />
						</TableFooter>
					</Layout>
				</HomeContainer>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Home

const HomeContainer = styled.div``

const TableHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const TableFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`
const ServicesUL = styled.ul`
	${removeSpacing};
	list-style: none;
`
