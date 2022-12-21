import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../App';
import './modal.scss';
import ContactForm from '../contact-form/ContactForm';

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
	transition: { ease: 'easeInOut' }
};

const modal = {
	hidden: {
		y: '-100vh',
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' }
	}
};

const Modals = ({ showModal, setShowModal }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<AnimatePresence mode="wait">
			{showModal && (
				<motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden" exit="hidden">
					<motion.div className="modal" variants={modal} animate="visible" initial="hidden">
						{showModal && (
							<div className="exit-button" onClick={() => setShowModal(false)}>
								<CloseIcon sx={theme === 'light' ? { color: '#000' } : { color: '#fff' }} />
							</div>
						)}
						<h3>Tell me about your website</h3>
						<ContactForm />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modals;
