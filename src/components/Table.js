import React from 'react'
import styled from 'styled-components'

function Table({ headings, children }) {

	return (
		<TableContainer>
			<TableHeadContainer>
				<TableHeadingRow>{headings}</TableHeadingRow>
			</TableHeadContainer>
			<TableBody>{children}</TableBody>
		</TableContainer>
	)
}

export default Table

const TableHeadingRow = styled.tr`
	background-color: #3f51b5;
`

const TableContainer = styled.table`
	border: 0;
	width: 100%;
	background-color: white;
	border-radius: 5px;
	/* box-shadow: 2px 3px 20px 0px #00000017; */
	border-collapse: collapse;
	overflow: scroll;
`

const TableBody = styled.tbody``

const TableHeadContainer = styled.thead``

