import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hello from '../components/Hello';
import TechStack from '../components/TechStack';
import Jobs from '../components/Jobs';

const Layout = () => {

	return (
		<>
			<Hello />
			<Container>
				<Row>
					<Col>
						<TechStack />
					</Col>
					<Col>
						<Jobs />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Layout;