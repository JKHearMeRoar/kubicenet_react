import React from 'react';
import './assets/css/App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import En from './pages/en';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/:cz?' element={<Home />} />
				{/* <Route path='/' element={<Home />} /> */}
				<Route path='/en' element={<En />} />
			</Routes>
		</Router>
	);
}

export default App;
