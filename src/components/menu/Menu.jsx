import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { DataContext } from '../../context/data.context';
import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
	const { data } = useContext(DataContext);
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			{data.header.navigation.map((item) => {
				return (
					<Link
						activeClass="active"
						key={item}
						to={item}
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
						onClick={() => setMenuOpen(false)}
					>
						{item}
					</Link>
				);
			})}
		</div>
	);
};

export default Menu;
