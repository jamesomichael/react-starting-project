import CoreConcept from './components/CoreConcepts';
import Header from './components/Header/Header';

import { CORE_CONCEPTS } from './data';

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
