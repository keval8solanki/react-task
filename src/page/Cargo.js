import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { API_URI } from '../api/endpoints'
import Table from '../components/Table'
import { Layout, TableData, TableHead, TableRow } from '../styles/globalStyles'
import { v4 as uuid } from 'uuid'
import Loader from '../components/Loader'

function Cargo(props) {
	
	const [singleData, setSingleData] = useState()
	const id = props.match.params.id

	useEffect(() => {
		Axios.get(`${API_URI}/shipments/${id}`)
			.then(({ data }) => setSingleData(data))
			.catch((e) => console.log(e))
	}, [id])

	const cargoData = singleData && singleData.cargo
	const cargoHeading = singleData && Object.keys(singleData.cargo[0])
	const renderCargoHeading =
		singleData &&
		cargoHeading.map((heading) => <TableHead key={uuid()}>{heading}</TableHead>)

	const renderCargoData =
		singleData &&
		cargoData.map((cargo) => {
			return (
				<TableRow key={uuid()}>
					<TableData>{cargo.type}</TableData>
					<TableData>{cargo.description}</TableData>
					<TableData>{cargo.volume}</TableData>
				</TableRow>
			)
		})

	return (
		<>
			{singleData ? (
				<div>
					<Layout>
						<Heading>
							<NavLink to='/'>{id}</NavLink> {'>'} Cargo
						</Heading>
						<Table headings={renderCargoHeading}>{renderCargoData}</Table>
					</Layout>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Cargo

const Heading = styled.h1`
	text-align: left;
`
