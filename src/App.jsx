import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
	const description = reactDescriptions[genRandomInt(2)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app
				you are going to build!
			</p>
		</header>
	);
};

const CoreConcept = (props) => {
	const { title, description, image } = props;
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
};

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept, idx) => (
							<CoreConcept
								key={idx}
								title={concept.title}
								description={concept.description}
								image={concept.image}
							/>
						))}
					</ul>
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
};

export default App;
