import React from 'react';
import './assets/css/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from './assets/css/Theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages';
import En from './pages/en';

function App() {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<Navbar />
				<Routes>
					<Route path='/:cz?' element={<Home />} />
					<Route path='/en' element={<En />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
