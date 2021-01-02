import * as React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Image, Card, CardDeck, ResponsiveEmbed, Jumbotron } from "react-bootstrap";
import Particles from "react-tsparticles";
import { options } from "../utils/particleConfig.js";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Main images */
import favicon from "../images/favicon.ico";
import timeline from "../images/timeline.png";
import hands from "../images/hands.png";

/* Emotion Images */
import alienation from "../images/alienation.png";
import despair from "../images/despair.png";
import nothingness from "../images/nothingness.png";
import absurdity from "../images/absurdity.png";

/* People Images */
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";

/* Examples covers */
import art from "../images/art.png";
import memento from "../images/memento.png";
import truman from "../images/truman.png";
import matrix from "../images/matrix.png";
import kane from "../images/kane.png";
import eternalSunshine from "../images/eternal-sunshine.png";
import groundhogDay from "../images/groundhog-day.png";

/**
 * ExiVue Single Page
 */
const IndexPage = () => {
	/* Keyframes */
	const { scrollYProgress } = useViewportScroll();
	const initXPos = 1000;

	return (
		<Container fluid className="h-100">
			<Helmet>
				<meta charSet="utf-8" />
				<title>ExiVue - What is Existentialism?</title>
				<link rel="canonical" href="https://hcshires.github.io/exivue" />
				<link rel="icon" href={favicon} />
			</Helmet>
			<Particles id="tsparticles" options={options} />
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
						<Button className="iconButton" variant="light" onClick={() => window.scrollTo(0, 900)}>
							<BsChevronDoubleDown color="white" size="5em" />
						</Button>
					</Col>
				</motion.div>
			</Row>
			{/* Key Belief */}
			<Row className="h-100 justify-content-center">
				<Col xs={10} className="verticalAlign text-center">
					<motion.div className="header" style={{ x: useTransform(scrollYProgress, [0, 0.07], [-initXPos, 0]) }}>
						<h2>The KEY BELIEF</h2>
						<h3>There are TWO HANDS of Existentialism</h3>
					</motion.div>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center" style={{ marginTop: "50px" }}>
				<Col md={5} className="verticalAlign">
					<motion.h3
						style={{
							y: useTransform(scrollYProgress, [0.07, 0.09], [-100, 0]),
							opacity: useTransform(scrollYProgress, [0.05, 0.1], [0, 1]),
						}}>
						While ONE HAND is devoted to observing that there is an end to everything, the OTHER HAND creates motivation to
						CONTROL one's outcome and RESPOND effectively to suffering
					</motion.h3>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div style={{ opacity: useTransform(scrollYProgress, [0.05, 0.11], [0, 1]) }}>
						<Image fluid src={hands} />
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div style={{ opacity: useTransform(scrollYProgress, [0.11, 0.15], [0, 1]) }}>
						<Image fluid src={timeline} />
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.h3
						style={{
							y: useTransform(scrollYProgress, [0.1, 0.13], [-100, 0]),
							opacity: useTransform(scrollYProgress, [0.1, 0.12], [0, 1]),
						}}>
						Existentialism became a popular concept with the 1st and 2nd World Wars due to the extreme experiences and the
						seemlingly unending conflicts and injustices
					</motion.h3>
				</Col>
				<Col md={10}>
					<h2></h2>
				</Col>
			</Row>
			{/* Emotion */}
			<Row className="h-100 justify-content-center">
				<Col xs={10} className="verticalAlign text-center">
					<motion.div className="header" style={{ x: useTransform(scrollYProgress, [0.1, 0.17], [initXPos, 0]) }}>
						<h2>EMOTIONS</h2>
						<h3>The thoughts and feelings of Existentialism</h3>
					</motion.div>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center" style={{ marginTop: "100px" }}>
				{/* Alienation */}
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							rotate: useTransform(scrollYProgress, [0.17, 0.2], [-90, 0]),
							opacity: useTransform(scrollYProgress, [0.17, 0.2], [0, 1]),
						}}>
						<h2>ALIENATION</h2>
						<h3>A sense of disconnection or isolation from social relationships or a group with common values</h3>
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div style={{ opacity: useTransform(scrollYProgress, [0.17, 0.2], [0, 1]) }}>
						<Image fluid src={alienation} />
					</motion.div>
				</Col>
			</Row>
			{/* Despair */}
			<Row className="h-100 justify-content-center section">
				<Col md={5} className="verticalAlign">
					<motion.div style={{ opacity: useTransform(scrollYProgress, [0.2, 0.23], [0, 1]) }}>
						<Image fluid src={despair} />
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							rotate: useTransform(scrollYProgress, [0.2, 0.23], [90, 0]),
							opacity: useTransform(scrollYProgress, [0.2, 0.23], [0, 1]),
						}}>
						<h2>DESPAIR</h2>
						<h3>
							The loss or absence of hope; the anticipation of a future, positive outcome is no longer present in individuals
							with despair
						</h3>
					</motion.div>
				</Col>
			</Row>
			{/* Nothingness */}
			<Row className="h-100 justify-content-center section">
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							rotate: useTransform(scrollYProgress, [0.24, 0.27], [-90, 0]),
							opacity: useTransform(scrollYProgress, [0.24, 0.27], [0, 1]),
						}}>
						<h2>NOTHINGNESS</h2>
						<h3>The absense of things which one desires or expects to be present</h3>
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							opacity: useTransform(scrollYProgress, [0.24, 0.27], [0, 1]),
							x: useTransform(scrollYProgress, [0.24, 0.27], [initXPos, 0]),
						}}>
						<Image fluid src={nothingness} />
					</motion.div>
				</Col>
			</Row>
			{/* Absurdity */}
			<Row className="h-100 justify-content-center section">
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							rotate: useTransform(
								scrollYProgress,
								[0.285, 0.29, 0.3, 0.31, 0.315, 0.32, 0.325, 0.33, 0.335],
								[90, 180, 270, 360, 0, 90, 180, 270, 360]
							),
							x: useTransform(scrollYProgress, [0.27, 0.34], [-initXPos, 0]),
							y: useTransform(scrollYProgress, [0.27, 0.34], [-initXPos, 0]),
						}}>
						<Image fluid src={absurdity} />
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							rotate: useTransform(scrollYProgress, [0.3, 0.33], [90, 0]),
							opacity: useTransform(scrollYProgress, [0.3, 0.33], [0, 1]),
						}}>
						<h2>ABSURDITY</h2>
						<h3>Feeling rediculousness or unreasonability on oneself or the state of something else</h3>
					</motion.div>
				</Col>
			</Row>
			{/* Fate */}
			<motion.div
				style={{
					scale: useTransform(scrollYProgress, [0.36, 0.38], [5, 1]),
					opacity: useTransform(scrollYProgress, [0.36, 0.38], [0, 1]),
				}}>
				<Jumbotron fluid>
					<Container>
						<h1 className="text-center">FATE...</h1>
						<ul>
							<li>Decides our inevitable destiny and our future</li>
							<li>Does NOT describe the JOURNEY to that future</li>
							<li>
								Provides a "Moment In-Between" the struggle so we realize we can accept and stand up to our decided future: a
								VERY IMPORTANT moment
							</li>
						</ul>
					</Container>
				</Jumbotron>
			</motion.div>

			{/* Key Thinkers */}
			<Row className="h-100 justify-content-center text-center">
				<Col xs={10} className="verticalAlign">
					<motion.div className="header" style={{ x: useTransform(scrollYProgress, [0.41, 0.45], [-initXPos, 0]) }}>
						<h2>KEY EXISTENTIALIST THINKERS</h2>
					</motion.div>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center text-center section">
				<Col xs={10}>
					<motion.div style={{ x: useTransform(scrollYProgress, [0.45, 0.48], [-initXPos * 2, 0]) }}>
						<CardDeck>
							<Card>
								<Card.Img variant="top" src={person1} />
								<Card.Body>
									<Card.Title>Søren Kierkegaard</Card.Title>
									<Button
										variant="light"
										onClick={() => window.open("https://plato.stanford.edu/entries/kierkegaard/", "_blank")}>
										Learn about Kierkegaard
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={person2} />
								<Card.Body>
									<Card.Title>Friedrich Nietzsche</Card.Title>
									<Button
										variant="light"
										onClick={() => window.open("https://plato.stanford.edu/entries/nietzsche/", "_blank")}>
										Learn about Nietzsche
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={person3} />
								<Card.Body>
									<Card.Title>Albert Camus</Card.Title>
									<Button variant="light" onClick={() => window.open("https://plato.stanford.edu/entries/camus/", "_blank")}>
										Learn about Camus
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" src={person4} />
								<Card.Body>
									<Card.Title>Jean-Paul Sartre</Card.Title>
									<Button
										variant="light"
										onClick={() => window.open("https://plato.stanford.edu/entries/sartre/", "_blank")}>
										Learn about Sartre
									</Button>
								</Card.Body>
							</Card>
						</CardDeck>
					</motion.div>
				</Col>
			</Row>
			{/* Resources */}
			<Row className="h-100 justify-content-center text-center">
				<Col xs={10} className="verticalAlign">
					<motion.div className="header" style={{ x: useTransform(scrollYProgress, [0.5, 0.54], [initXPos, 0]) }}>
						<h2>EXAMPLES AND RESOURCES</h2>
						<h3>Check out examples that utilize Existentialism in the overall meaning of the work</h3>
					</motion.div>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center text-center section">
				<Col md={5} className="verticalAlign">
					<motion.div
						style={{
							y: useTransform(scrollYProgress, [0.55, 0.57], [-100, 0]),
							opacity: useTransform(scrollYProgress, [0.55, 0.57], [0, 1]),
						}}>
						<h2>The Myth of Sisyphus</h2>
						<h3>A Greek Mythology example where a self-centered king learns to accept his fate and "beat" his punishment</h3>
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign" style={{ marginBottom: "100px" }}>
					<motion.div
						className="header"
						style={{
							y: useTransform(scrollYProgress, [0.55, 0.57], [100, 0]),
							opacity: useTransform(scrollYProgress, [0.55, 0.57], [0, 1]),
						}}>
						<ResponsiveEmbed aspectRatio="16by9">
							<iframe
								title="TEDEd Sisyphus"
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/q4pDUxth5fQ"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</ResponsiveEmbed>
					</motion.div>
				</Col>
				<Col xs={10}>
					<motion.div
						style={{
							rotateY: useTransform(scrollYProgress, [0.6, 0.65], [90, 0]),
							opacity: useTransform(scrollYProgress, [0.6, 0.65], [0, 1]),
						}}>
						<Card className="text-center" style={{ marginBottom: "50px" }}>
							<Card.Header>Artwork</Card.Header>
							<Image fluid src={art} />
							<Card.Body>
								<Card.Title>The work of Jackson Pollock</Card.Title>
								<Card.Text>
									The style Jackson Pollock embraced seems chaotic and extreme, as brush strokes are layered on top of each
									other in seemlingly random patterns with unmatching colors. However, his works are deliberate, since his
									brush strokes were controlled and his creative decisions were a direct cause of the end result.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
					<motion.div style={{ x: useTransform(scrollYProgress, [0.67, 0.72], [initXPos * 2, 0]) }}>
						<CardDeck>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={memento} />
								<Card.Body>
									<Card.Title>Memento</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0209144/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={truman} />
								<Card.Body>
									<Card.Title>The Truman Show</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0120382/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={matrix} />
								<Card.Body>
									<Card.Title>The Matrix</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0133093/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
						</CardDeck>
					</motion.div>
					<motion.div style={{ x: useTransform(scrollYProgress, [0.75, 0.8], [-initXPos * 2, 0]) }}>
						<CardDeck>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={kane} />
								<Card.Body>
									<Card.Title>Citizen Kane</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0033467/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={eternalSunshine} />
								<Card.Body>
									<Card.Title>Eternal Sunshine of the Spotless Mind</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0338013/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Popular Film</Card.Header>
								<Card.Img variant="top" src={groundhogDay} />
								<Card.Body>
									<Card.Title>Groundhog Day</Card.Title>
									<Button variant="light" onClick={() => window.open("https://www.imdb.com/title/tt0107048/", "_blank")}>
										View Film
									</Button>
								</Card.Body>
							</Card>
						</CardDeck>
					</motion.div>
				</Col>
			</Row>
			{/* The Takeaway */}
			<Row className="h-100 justify-content-center text-center">
				<Col xs={10} className="verticalAlign text-center">
					<motion.div className="header" style={{ x: useTransform(scrollYProgress, [0.8, 0.87], [-initXPos, 0]) }}>
						<h2>THE TAKEAWAY</h2>
					</motion.div>
				</Col>
			</Row>
			<Row className="h-100 justify-content-center text-center section">
				<Col md={5} className="verticalAlign text-center">
					<motion.div
						className="header"
						style={{
							y: useTransform(scrollYProgress, [0.87, 0.9], [100, 0]),
							opacity: useTransform(scrollYProgress, [0.87, 0.9], [0, 1]),
						}}>
						<ResponsiveEmbed aspectRatio="16by9">
							<iframe
								title="Existential Bummer YouTube Video"
								width="1280"
								height="720"
								src="https://www.youtube.com/embed/Yb-OYmHVchQ"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</ResponsiveEmbed>
					</motion.div>
				</Col>
				<Col md={5} className="verticalAlign text-right">
					<motion.div
						style={{
							y: useTransform(scrollYProgress, [0.87, 0.9], [-100, 0]),
							opacity: useTransform(scrollYProgress, [0.87, 0.9], [0, 1]),
						}}>
						<h2>Existential Bummer</h2>
						<h3>
							Jason Silva talks about how Existentialism and Entropy exist in everything we interact with, but also how the
							human spirit should respond so life can be the best it can.
						</h3>
					</motion.div>
				</Col>
				<Col xs={10} style={{ marginTop: "50px" }} className="verticalAlign">
					<motion.div
						className="header"
						style={{
							scale: useTransform(scrollYProgress, [0.94, 0.96], [0, 1]),
							opacity: useTransform(scrollYProgress, [0.94, 0.96], [0, 1]),
						}}>
						<Card style={{ border: "none" }}>
							<Card.Body>
								<h3>In what ways do you see Existentialism portrayed in literature, arts, and/or film?</h3>
							</Card.Body>
						</Card>
						<Card style={{ border: "none" }}>
							<Card.Body>
								<h3>
									How can not only the understanding of Existentialism, but also the Human spirit "fighting back" influence
									your life today?
								</h3>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col xs={11} style={{ margin: "50px 0" }}>
					<motion.h2 animate={{ scale: [1.05, 0.95] }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}>
						Life will always be temporary...but YOU can CHOOSE what you make of it
					</motion.h2>
				</Col>
			</Row>
			{/* Footer */}
			<Row
				className="h-100 text-center text-md-left"
				style={{ padding: "50px 0", backgroundColor: "#444", boxShadow: "0 -5px 5px 0 rgba(46, 46, 46, 0.1)" }}>
				<Col md={{ span: 6, offset: 1 }} className="verticalAlign">
					<a href="/#">
						<h3>
							<strong>EXISTENTIALISM VISUALIZER (ExiVue)</strong>
						</h3>
					</a>
					<h5>An interactive organizer on the concept of Existentialism</h5>
					<Button
						variant="light"
						onClick={() => window.open("https://hcshires.github.io/projects", "_blank")}
						style={{ margin: "20px 0" }}>
						Return to Henry's Projects
					</Button>
					<hr></hr>
					<h5 style={{ paddingTop: "10px" }}>2021 - v1.0.0 - Designed by Henry Shires</h5>
				</Col>
			</Row>
		</Container>
	);
};

export default IndexPage;
