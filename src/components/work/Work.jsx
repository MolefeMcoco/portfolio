import React, { useContext } from 'react';
import './work.scss';
import { DataContext } from '../../context/data.context';

const Work = () => {
	const { data } = useContext(DataContext);
	console.log(data.portfolio);
	return (
		<section className="work">
			<div className="container">
				<h2>My Work</h2>
				{data.portfolio.map((item) => {
					return (
						<div className="item">
							<div className="image">
								<img src={item.image} alt={item.alt} />
							</div>
							<div className="business-info">
								<img src={item.logo} alt="logo" />
								<p>{item.desc}</p>
								<p>
									<a href={item.url}>{item.url}</a>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Work;
