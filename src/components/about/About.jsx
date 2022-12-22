import React, { useContext } from 'react';
import CustomButton from '../buttons/CustomButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './about.scss';
import { DataContext } from '../../context/data.context';

const About = ({ displayModal, slide }) => {
	const { data } = useContext(DataContext);

	return (
		<section className="about" id="about">
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
						<CustomButton
							onClick={() => displayModal()}
							variants={slide}
							animate="visible"
							initial="hidden"
							transition={{ delay: 4, type: 'tween', duration: 1.5 }}
						>
							{data.buttons.hire}
						</CustomButton>
						<CustomButton
							whatsappButton
							onClick={() => window.open('https://api.whatsapp.com/send?phone=27662660513', '_blank')}
						>
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
