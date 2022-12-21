import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { DataContext } from '../../context/data.context';
import './navbar.scss';

const Navbar = () => {
	const { data } = useContext(DataContext);

	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
						<img src={data.header.logo} alt={data.header.alt} />
					</Link>
				</div>
				<div className="navigation">
					{data.header.navigation.map((item) => {
						return (
							<Link activeClass="active" to={item} spy={true} smooth={true} offset={-50} duration={500}>
								{item}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
