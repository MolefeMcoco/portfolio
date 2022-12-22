import React, { useContext } from 'react';
import './work.scss';
import { DataContext } from '../../context/data.context';
import LanguageIcon from '@mui/icons-material/Language';

const Work = () => {
	const { data } = useContext(DataContext);

	return (
		<section className="work" id="work">
			<div className="container">
				<h2>My Work</h2>
				{data.portfolio.map((item) => {
					return (
						<div className="item" key={item.logo}>
							<div className="image">
								<p onClick={() => window.open(item.link)} className="overlay">
									Visit Website <LanguageIcon sx={{ fontSize: 30, marginLeft: 1 }} />
								</p>
								<img src={item.image} alt={item.alt} />
							</div>
							<div className="business-info">
								<img src={item.logo} alt="logo" />
								<p>{item.desc}</p>
								<p>
									<a href={item.link}>{item.url}</a>
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
