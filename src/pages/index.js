import * as React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import Particles from "react-tsparticles";
import { options } from "../utils/particleConfig.js";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import styles from "../styles/index.module.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Images */
import favicon from "../images/favicon.ico";
import alienation from "../images/alienation.png";
import despair from "../images/despair.png";
import nothingness from "../images/nothingness.png";
import absurdity from "../images/absurdity.png";

/**
 * ExiVue Single Page
 */
const IndexPage = () => {
	return (
		<Container fluid className="h-100">
			<Helmet>
				<meta charSet="utf-8" />
				<title>ExiVue - What is Existentialism?</title>
				<link rel="canonical" href="https://hcshires.github.io/exivue" />
				<link rel="icon" href={favicon} />
			</Helmet>
			<Particles id="tsparticles" options={options} style={{ position: "absolute" }} height="4000px" />
			<Row className="justify-content-center h-100">
				<motion.div animate={{ scale: [0, 1], opacity: [0, 1] }} transition={{ duration: 1 }}>
					<Col xs={12} className="text-center" style={{ margin: "200px 0px" }}>
						<h1>EXISTENTIALISM</h1>
						<h3>/ˌeɡzəˈsten(t)SHəˌlizəm/</h3>
						<h3>
							noun
							<br />a philosophical theory or approach which emphasizes the existence of the individual person as a free and
							responsible agent determining their own development through acts of the will.
						</h3>
					</Col>
				</motion.div>
				<motion.div
					animate={{ opacity: [0, 1], translateY: [-100, 0] }}
					transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}>
					<Col xs={12}>
						<Button className={styles.iconButton} variant="light" onClick={() => window.scrollTo(0, 900)}>
							<BsChevronDoubleDown color="white" size="5em" />
						</Button>
					</Col>
				</motion.div>
			</Row>
			<Row className="h-100 justify-content-center">
				<Col xs={10} className="header verticalAlign text-center">
					<h2>EMOTIONS</h2>
					<h3>The thoughts and feelings of Existentialism</h3>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center" style={{ marginTop: "100px" }}>
				{/* Alienation */}
				<Col xs={5} className="verticalAlign">
					<h2>ALIENATION</h2>
					<h3>A sense of disconnection or isolation from social relationships or a group with common values</h3>
				</Col>
				<Col xs={5} className="verticalAlign">
					<Image fluid src={alienation} />
				</Col>
			</Row>
			{/* Despair */}
			<Row className="h-100 justify-content-center section">
				<Col xs={5} className="verticalAlign">
					<Image fluid src={despair} />
				</Col>
				<Col xs={5} className="verticalAlign">
					<h2>DESPAIR</h2>
					<h3>
						The loss or absence of hope; the anticipation of a future, positive outcome is no longer present in individuals
						with despair
					</h3>
				</Col>
			</Row>
			{/* Nothingness */}
			<Row className="h-100 justify-content-center section">
				<Col xs={5} className="verticalAlign">
					<h2>NOTHINGNESS</h2>
					<h3>The absense of things which one desires or expects to be present</h3>
				</Col>
				<Col xs={5} className="verticalAlign">
					<Image fluid src={nothingness} />
				</Col>
			</Row>
			{/* Absurdity */}
			<Row className="h-100 justify-content-center section">
				<Col xs={5} className="verticalAlign">
					<Image fluid src={absurdity} />
				</Col>
				<Col xs={5} className="verticalAlign">
					<h2>ABSURDITY</h2>
					<h3>Feeling rediculousness or unreasonability on oneself or the state of something else</h3>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center">
				<Col xs={10} className="header verticalAlign text-center">
					<h2>THE OTHER HAND</h2>
					<h3>There are TWO HANDS of Existentialism</h3>
				</Col>
			</Row>
			<Row className="h-100 section">
				<Col xs={{ span: 5, offset: 1 }}>
					<h2>The KEY BELIEF</h2>
					<h3>
						While ONE HAND is devoted to observing that there is an end to everything, the OTHER HAND creates motivation to
						CONTROL one's outcome and ACCEPT a beginning and an end
					</h3>
				</Col>
			</Row>
			{/* Resources */}
			<Row className="h-100 justify-content-center">
				<Col xs={10} className="header verticalAlign text-center">
					<h2>EXAMPLES AND RESOURCES</h2>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center section">
				<Col xs={12}></Col>
				<Col xs={4}>
					<ListGroup as="ul">
						<ListGroup.Item as="li" active>
							Movies with Existentialism
						</ListGroup.Item>
						<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
						<ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
						<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default IndexPage;
