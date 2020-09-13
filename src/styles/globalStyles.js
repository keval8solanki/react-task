import styled, { css } from 'styled-components'

export const removeSpacing = css`
	margin: 0px;
	padding: 0px;
`

export const TableRow = styled.tr`
	cursor: pointer;
	transition: all 0.5s;
	&:hover {
		background-color: #eef0f7;
	}
`

export const TableData = styled.td`
	border: 0;
	font-size: 0.9em;

	text-align: left;
	padding: 6px 10px;

	border-bottom: 1px solid #00000021;
`

export const Layout = styled.div`
	max-width: 1140px;
	margin: 0 auto;
`

export const TableHead = styled.th`
	border: 0;
	font-size: 0.9em;
	text-align: left;
	padding: 6px 10px;
	border-bottom: 1px solid black;
	color: white;
	cursor: pointer;
`
export const TableHeadContainer = styled.div`
	display: flex;
	align-items: center;
`

export const TableHeadTitle = styled.p`
	${removeSpacing}
	margin-right: 5px;
`

export const CommonButtonStyle = css`
	border-style: none;
	margin: 0px 5px;
	padding: 4px 10px;
	color: white;
	border-radius: 6px;
	&:focus {
		outline: none;
	}
	&:disabled {
		opacity: 0.3;
	}
`
