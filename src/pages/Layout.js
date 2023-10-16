import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from '../components/Navbar';
import Hello from '../components/Hello';
import TechStack from '../components/TechStack';
import Languages from '../components/Languages';
import Education from '../components/Education';
import Jobs from '../components/Jobs';
import Footer from '../components/Footer';

const Layout = () => {

	return (
		<>
			<Navbar />
			<Hello />
			<Container>
				<Row className="g-5">
					<Col>
						<Row>
							<Col>
								<TechStack />
							</Col>
						</Row>
						<Row>
							<Col>
								<Languages />
							</Col>
						</Row>
						<Row>
							<Col>
								<Education />
							</Col>
						</Row>
					</Col>
					<Col>
						<Jobs />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Layout;