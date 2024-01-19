import CoreConcept from '../CoreConcept/CoreConcept';

import './CoreConcepts.css';

import { CORE_CONCEPTS } from '../../data';

const CoreConcepts = () => {
	return (
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
	);
};

export default CoreConcepts;
