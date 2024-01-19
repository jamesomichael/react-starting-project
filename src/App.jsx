import { useState } from 'react';

import CoreConcept from './components/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';

import { CORE_CONCEPTS, EXAMPLES } from './data';

const App = () => {
	const [selectedTopic, setSelectedTopic] = useState();

	const handleClick = (selectedButton) => setSelectedTopic(selectedButton);

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
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							label="Components"
							isSelected={selectedTopic === 'components'}
							onClick={() => handleClick('components')}
						/>
						<TabButton
							label="JSX"
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleClick('jsx')}
						/>
						<TabButton
							label="Props"
							isSelected={selectedTopic === 'props'}
							onClick={() => handleClick('props')}
						/>
						<TabButton
							label="State"
							isSelected={selectedTopic === 'state'}
							onClick={() => handleClick('state')}
						/>
					</menu>
					{!selectedTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
};

export default App;
