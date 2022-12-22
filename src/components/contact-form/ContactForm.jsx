import React, { useRef, useState } from 'react';
import CustomButton from '../buttons/CustomButton';
import './ContactForm.scss';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const [ done, setDone ] = useState(false);
	const form = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('form submited');
		emailjs.sendForm('service_vlhqige', 'template_ceubmaj', form.current, 'Ra7scSsSPyfITKy5h').then(
			(result) => {
				console.log(result.text);
				setDone(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="contact-form">
			<form ref={form} onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name :</label>
					<br />
					<input
						type="text"
						id="name"
						name="name"
						placeholder="John Doe"
						required={true}
						pattern="[A-Za-z ]{3,32}$"
					/>

					<br />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email : </label>
					<br />
					<input
						type="text"
						id="email"
						name="email"
						placeholder="yourname@example.co.za"
						required={true}
						pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
					/>

					<br />
				</div>
				<div className="form-group">
					<label htmlFor="message">Message : </label>
					<br />
					<textarea
						type="text"
						id="message"
						name="message"
						placeholder="Tell me about your website? e.g goals,budget specific features."
						required={true}
						pattern="{3,16}$"
						rows={8}
					/>

					<br />
				</div>
				{done && (
					<div className="form-group">
						<p>Message Sent Successfully, i will get back to you shortly.</p>
					</div>
				)}
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
