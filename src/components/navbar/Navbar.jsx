import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { DataContext } from '../../context/data.context';
import './navbar.scss';

const Navbar = ({ menuOpen, setMenuOpen }) => {
	const { data } = useContext(DataContext);
	console.log(menuOpen);
	return (
		<nav className={'navbar ' + (menuOpen && 'active')}>
			<div className="container">
				<div className="logo">
					<Link to="home" spy={true} smooth={true} offset={-200} duration={1000}>
						<img src={data.header.logo} alt={data.header.alt} />
					</Link>
				</div>
				<div className="navigation">
					{data.header.navigation.map((item) => {
						return (
							<Link
								className="desktop-menu"
								activeClass="active"
								key={item}
								to={item}
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								{item}
							</Link>
						);
					})}
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1" />
						<span className="line2" />
						<span className="line3" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
