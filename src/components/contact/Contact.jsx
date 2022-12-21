import React from 'react';
import './contact.scss';
import ContactForm from '../contact-form/ContactForm';

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<div className="form">
					<h4>Let's discuss your project</h4>
					<p>
						To request a quotation or inquire about my services, please email me at molefe@mmwebdesign.co.za
						or fill out the form below.
					</p>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
