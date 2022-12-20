import React, { useContext } from 'react';
import { DataContext } from '../../context/data.context';
import './services.scss';

const Services = () => {
	const { data } = useContext(DataContext);
	const services = data.services;
	console.log(services);

	return (
		<section className="services">
			<div className="container">
				{services.map((item) => {
					return (
						<div className="item" key={item.title}>
							<img src={`https://mmwebdesign.co.za/assets/images/${item.icon}.svg`} alt={item.icon} />
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
