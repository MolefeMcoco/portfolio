import React, { useContext } from 'react';
import { DataContext } from '../../context/data.context';
import { ThemeContext } from '../../App';
import './services.scss';

const Services = () => {
	const { data } = useContext(DataContext);
	const { theme } = useContext(ThemeContext);
	const services = data.services;

	return (
		<section className="services" id="services">
			<div className="container">
				{services.map((item) => {
					return (
						<div className="item" key={item.title}>
							<img
								src={`https://mmwebdesign.co.za/assets/images/${theme === 'light'
									? item.icon
									: item.darkicon}.svg`}
								alt={item.icon}
							/>
							<h4>{item.title}</h4>
							<p>{item.disc}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
