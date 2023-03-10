import React, { useContext } from 'react';
import './header.scss';
import { DataContext } from '../../context/data.context';
import CustomButton from '../buttons/CustomButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = ({ displayModal, slide }) => {
	const { data } = useContext(DataContext);
	const header = data.header;

	return (
		<section className="header" id="home">
			<div className="container">
				<div className="hidden">
					<div className="img-container">
						<img src={header.image} alt={header.imagealt} />
					</div>
				</div>
				<div className="left">
					<div className="left-container">
						<h2>I'am Molefe Mcoco</h2>
						<h1>Web Developer</h1>
						<p>
							I specialize in designing and developing high-performance custom websites that reflect your
							brand and increase conversions by turning website visitors to customers while providing the
							best customer experience.
						</p>
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
				<div className="right">
					<div className="img-container">
						<img src={header.image} alt={header.imagealt} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
