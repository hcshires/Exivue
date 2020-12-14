import * as React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particles from "react-tsparticles";
import { options } from "../components/particleConfig.js";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import styles from "../styles/index.module.css";
import favicon from "../images/favicon.ico";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * ExiVue Index Component
 */

const IndexPage = () => {
	return (
		<Container fluid>
			<Helmet>
				<meta charSet="utf-8" />
				<title>ExiVue - What is Existentialism?</title>
				<link rel="canonical" href="https://hcshires.github.io/exivue" />
				<link rel="icon" href={favicon} />
			</Helmet>
			<Particles
				id="tsparticles"
				options={options}
				style={{ position: "absolute" }}
			/>
			<Row className="justify-content-center">
				<motion.div
					animate={{ scale: [0, 1], opacity: [0, 1] }}
					transition={{ duration: 1 }}>
					<Col xs={12} className="text-center" style={{ margin: "200px 0px" }}>
						<h1>EXISTENTIALISM</h1>
						<h2>/ˌeɡzəˈsten(t)SHəˌlizəm/</h2>
						<h2>
							noun
							<br />a philosophical theory or approach which emphasizes the
							existence of the individual person as a free and responsible agent
							determining their own development through acts of the will.
						</h2>
					</Col>
				</motion.div>
				<motion.div
					animate={{ opacity: [0, 1], translateY: [-100, 0] }}
					transition={{ duration: 2 }}>
					<Col xs={12}>
						<Button className={styles.iconButton} variant="light">
							<BsChevronDoubleDown color="white" size="5em" />
						</Button>
					</Col>
				</motion.div>
			</Row>
		</Container>
	);
};

export default IndexPage;
