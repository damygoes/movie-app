const Layout = (props) => {
	return (
		<div className="py-20 px-6 sm:px-16 md:px-24 md:py-44 lg:px-32 ">
			{props.children}
		</div>
	);
};

export default Layout;
