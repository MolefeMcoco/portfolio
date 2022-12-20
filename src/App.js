import './App.scss';
import React, { useState, createContext, useEffect, useContext } from 'react';
import { DataContext } from './context/data.context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import Header from './components/header/Header';
import Services from './components/services/Services';
import Work from './components/work/Work';

export const ThemeContext = createContext(null);

function App() {
	const { data } = useContext(DataContext);
	const [ theme, setTheme ] = useState('dark');
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			const colorScheme = event.matches ? 'dark' : 'light';

			setTheme(colorScheme);
		});
	}, []);
	const toggleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{data && (
				<div className="App" id="light">
					{theme === 'dark' ? (
						<LightModeOutlinedIcon className="light-icon" onClick={() => toggleTheme()} />
					) : (
						<DarkModeOutlinedIcon className="dark-icon" onClick={() => toggleTheme()} />
					)}
					<Header />
					<Services />
					<Work />
				</div>
			)}
		</ThemeContext.Provider>
	);
}

export default App;
