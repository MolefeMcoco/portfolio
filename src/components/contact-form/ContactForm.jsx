import React from 'react';
import CustomButton from '../buttons/CustomButton';
import './ContactForm.scss';

const ContactForm = () => {
	return (
		<div className="contact-form">
			<form>
				<div className="form-group">
					<label for="name">Name :</label>
					<br />
					<input type="text" id="name" name="name" placeholder="John Doe" />
					<br />
				</div>
				<div className="form-group">
					<label for="email">Email : </label>
					<br />
					<input type="text" id="email" name="email" placeholder="yourname@example.co.za" />
					<br />
				</div>
				<div className="form-group">
					<label for="message">Message : </label>
					<br />
					<textarea
						type="text"
						id="message"
						name="message"
						placeholder="Tell me about your website? e.g goals,budget specific features."
						rows={8}
					/>
					<br />
				</div>
				<div className="form-group">
					<CustomButton type="submit" submitButton>
						Send Message
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
