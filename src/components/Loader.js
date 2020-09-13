import React from 'react'
import styled from 'styled-components'
import Spinner from '../assets/icons/spinner.svg'

function Loader() {
	return (
		<LoaderContainer>
			<img src={Spinner} alt="spinner" />
		</LoaderContainer>
	)
}

export default Loader

const LoaderContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
