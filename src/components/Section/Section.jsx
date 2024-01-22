const Section = (props) => {
	const { title, children, ...otherProps } = props;
	return (
		<section {...otherProps}>
			<h2>{title}</h2>
			{children}
		</section>
	);
};

export default Section;
