import React, { useContext } from 'react';
import { DataContext } from '../../context/data.context';
import './navbar.scss';

const Navbar = () => {
	const { data } = useContext(DataContext);

	return (
		<nav className="navbar">
			<div className="container">
				<div className="log">
					<img src={data.header.logo} alt={data.header.alt} />
				</div>
				<div className="navigation">
					{data.header.navigation.map((item) => {
						return <p key={item}>{item}</p>;
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
