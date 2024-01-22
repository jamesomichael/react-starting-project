const Tabs = (props) => {
	const { buttons, ButtonsContainer = 'menu', children } = props;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
};

export default Tabs;
