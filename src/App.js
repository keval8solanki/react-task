import React from 'react'
import styled from 'styled-components'
import Home from './page/Home'

import { HashRouter, Switch, Route } from 'react-router-dom'
import Cargo from './page/Cargo'

function App() {
	return (
		<AppContainer>
			<HashRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/cargo/:id' component={Cargo} />
				</Switch>
			</HashRouter>
		</AppContainer>
	)
}

export default App

const AppContainer = styled.div`
	text-align: center;
`
