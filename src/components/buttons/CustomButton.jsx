import React from 'react';
import './Custom-button.scss';

const CustomButton = ({ children, hireButton, whatsappButton, submitButton, ...otherProps }) => {
	return (
		<button
			className={`custom-button ${hireButton ? 'hire-button' : ''} ${submitButton
				? 'submitButton'
				: ''} ${whatsappButton ? 'whatsapp-button' : ''}`}
			type="submit"
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
