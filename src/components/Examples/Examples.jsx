import { useState } from 'react';

import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

import './Examples.css';

import { EXAMPLES } from '../../data';

const Examples = () => {
	const [selectedTopic, setSelectedTopic] = useState();

	return (
		<Section id="examples" title="Examples">
			<Tabs
				buttons={
					<>
						<TabButton
							label="Components"
							isSelected={selectedTopic === 'components'}
							onClick={() => setSelectedTopic('components')}
						/>
						<TabButton
							label="JSX"
							isSelected={selectedTopic === 'jsx'}
							onClick={() => setSelectedTopic('jsx')}
						/>
						<TabButton
							label="Props"
							isSelected={selectedTopic === 'props'}
							onClick={() => setSelectedTopic('props')}
						/>
						<TabButton
							label="State"
							isSelected={selectedTopic === 'state'}
							onClick={() => setSelectedTopic('state')}
						/>
					</>
				}
			>
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
			</Tabs>
		</Section>
	);
};

export default Examples;
