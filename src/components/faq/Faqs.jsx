import React, { useContext } from 'react';
import Faq from 'react-faq-component';
import './faqs.scss';
import { styles, config } from './styles';
import { DataContext } from '../../context/data.context';
const Faqs = () => {
	const { data } = useContext(DataContext);
	return (
		<section className="faq">
			<div className="container">
				<div className="content">
					<div className="left">
						<h2>FAQ's</h2>
						<img src="https://mmwebdesign.co.za/assets/images/question-mark.webp" alt="faq" />
					</div>
					<div className="right">
						<Faq data={data.faq.questions} styles={styles} config={config} className="faq" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
