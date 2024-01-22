import CoreConcept from '../CoreConcept/CoreConcept';
import Section from '../Section/Section';

import './CoreConcepts.css';

import { CORE_CONCEPTS } from '../../data';

const CoreConcepts = () => {
	return (
		<Section id="core-concepts" title="Core Concepts">
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
		</Section>
	);
};

export default CoreConcepts;
