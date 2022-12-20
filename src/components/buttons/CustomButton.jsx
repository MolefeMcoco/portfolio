import React from 'react';
import './Custom-button.scss';

const CustomButton = ({ children, hireButton, whatsappButton, ...otherProps }) => {
	return (
		<button
			className={`custom-button ${hireButton ? 'hire-button' : ''} ${whatsappButton ? 'whatsapp-button' : ''}`}
			type="submit"
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
