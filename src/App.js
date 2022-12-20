import logo from './logo.svg';
import './App.scss';
import React, { useState, createContext, useEffect, useContext } from 'react';
import { DataContext } from './context/data.context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export const ThemeContext = createContext(null);

function App() {
	const { data } = useContext(DataContext);
	const [ theme, setTheme ] = useState('dark');
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			const colorScheme = event.matches ? 'dark' : 'light';
			console.log(colorScheme); // "dark" or "light"
			setTheme(colorScheme);
		});
	}, []);
	const toggleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className="App" id={theme}>
				{theme === 'dark' ? (
					<LightModeOutlinedIcon className="light-icon" onClick={() => toggleTheme()} />
				) : (
					<DarkModeOutlinedIcon className="dark-icon" onClick={() => toggleTheme()} />
				)}
				<header className="App-header">
					<h2>This is heading</h2>
					<p>this is a paragraph</p>
				</header>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
