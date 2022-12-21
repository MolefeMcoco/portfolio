import './App.scss';
import React, { useState, createContext, useEffect, useContext } from 'react';
import { DataContext } from './context/data.context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Faqs from './components/faq/Faqs';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import CopyRight from './components/copyRight/CopyRight';
import Modals from './components/modal/Modals';

export const ThemeContext = createContext(null);

function App() {
	const { data } = useContext(DataContext);
	const [ theme, setTheme ] = useState('light');
	const [ showModal, setShowModal ] = useState(false);
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			const colorScheme = event.matches ? 'dark' : 'light';

			setTheme(colorScheme);
		});
	}, []);
	const toggleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
	};
	const slide = {
		visible: {
			y: 0
		},
		hidden: {
			y: '100vw'
		},
		exit: {
			y: '-100vw'
		}
	};

	const displayModal = () => {
		setShowModal(true);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{data && (
				<div className="App" id={theme}>
					{theme === 'dark' ? (
						<LightModeOutlinedIcon className="light-icon" onClick={() => toggleTheme()} />
					) : (
						<DarkModeOutlinedIcon className="dark-icon" onClick={() => toggleTheme()} />
					)}
					<Modals showModal={showModal} setShowModal={setShowModal} />
					<Navbar />

					<Header displayModal={displayModal} slide={slide} />
					<Services />
					<Work />
					<Testimonials />
					<Faqs />
					<About displayModal={displayModal} slide={slide} />
					<Contact />
					<CopyRight />
				</div>
			)}
		</ThemeContext.Provider>
	);
}

export default App;
