import React from 'react';
import './assets/css/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
				<Route path='/en' element={<En />} />
			</Routes>
      <Footer />
		</Router>
	);
}

export default App;
