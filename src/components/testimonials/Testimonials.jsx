import React, { useContext } from 'react';
import { DataContext } from '../../context/data.context';
import './testimonials.scss';
const Testimonials = () => {
	const { data } = useContext(DataContext);
	return (
		<section className="testimonials">
			<div className="container">
				<div className="left">
					<h2>{data.testimonials.heading}</h2>
					<p>{data.testimonials.subheading}</p>
				</div>
				<div className="right">
					{data.testimonials.reviews.map((item) => {
						return (
							<div className="item" key={item.image}>
								<img src={item.image} alt={item.name} />
								<h4>{item.name}</h4>
								<p>"{item.review}"</p>
								<p className="company">{item.company}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
