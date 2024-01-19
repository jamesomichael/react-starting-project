const TabButton = (props) => {
	const { label, isSelected, onClick } = props;
	return (
		<li>
			<button className={isSelected && 'active'} onClick={onClick}>
				{label}
			</button>
		</li>
	);
};

export default TabButton;
