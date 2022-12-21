import React, { useContext } from 'react';
import CustomButton from '../buttons/CustomButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './about.scss';
import { DataContext } from '../../context/data.context';

const About = () => {
	const { data } = useContext(DataContext);
	console.log(data.about.title);
	return (
		<section className="about">
			<div className="container">
				<div className="left">
					<div className="img-container">
						<img
							src="https://mmwebdesign.co.za/assets/images/molefe-mcoco-working-on-the-computer.webp"
							alt="adfad"
						/>
					</div>
				</div>
				<div className="right">
					<h4>{data.about.title}</h4>
					<p className="subheading">{data.about.subtitle}</p>
					<p>{data.about.paragraph}</p>
					<p>{data.about.paragraph}</p>
					<div className="buttons">
						<CustomButton>{data.buttons.hire}</CustomButton>
						<CustomButton whatsappButton>
							<span>
								<WhatsAppIcon sx={{ fontSize: 18, color: '#39B54A' }} />
							</span>{' '}
							{data.buttons.chat}
						</CustomButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
