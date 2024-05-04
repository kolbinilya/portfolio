import React, {createContext, useState, useContext, useEffect} from 'react';

const themes = {
	default: {
		'--color-bg': '#ffffff',
		'--color-bg-offset': '#f7f7f9',
		'--color-text': '#373a3c',
		'--color-text-offset': '#818a91',
		'--color-border': '#eceeef',
		'--color-primary': '#ff335f',
		'--color-primary-offset': '#ff1447',
		'--color-secondary': '#43a9a3',
	},
	dark: {
		'--color-bg': '#0e141b',
		'--color-bg-offset': '#252526',
		'--color-text': '#ffffff',
		'--color-text-offset': '#818a91',
		'--color-border': '#2d2d2d',
		'--color-primary': '#ff5277',
		'--color-primary-offset': '#ff2957',
		'--color-secondary': '#43a9a3',
	},
	beach: {
		'--color-bg': '#fffffe',
		'--color-bg-offset': '#e3f6f5',
		'--color-text': '#272343',
		'--color-text-offset': '#2d334a',
		'--color-border': '#e3f6f5',
		'--color-primary': '#ff9d00',
		'--color-primary-offset': '#ffca00',
		'--color-secondary': '#bae8e8',
	},
	choco: {
		'--color-bg': '#55423d',
		'--color-bg-offset': '#41312E',
		'--color-text': '#fffffe',
		'--color-text-offset': '#ffc0ad',
		'--color-border': '#271c19',
		'--color-primary': '#f3ab87',
		'--color-primary-offset': '#ffc0ad',
		'--color-secondary': '#e78fb3',
	},
	momo_farm: {
		'--color-bg': '#fef6e4',
		'--color-bg-offset': '#f3e1d8',
		'--color-text': '#172c66',
		'--color-text-offset': '#006e8a',
		'--color-border': '#f3d2c1',
		'--color-primary': '#f582ae',
		'--color-primary-offset': '#ff3d6a',
		'--color-secondary': '#8bd3dd',
	},
	browser: {
		'--color-bg': '#16161a',
		'--color-bg-offset': '#29293e',
		'--color-text': '#fffffe',
		'--color-text-offset': '#94a1b2',
		'--color-border': '#383a61',
		'--color-primary': '#7f5af0',
		'--color-primary-offset': '#e068fd',
		'--color-secondary': '#2cb67d',
	},
	lobster: {
		'--color-bg': '#fcddd4',
		'--color-bg-offset': '#ffb9ad',
		'--color-text': '#4b1313',
		'--color-text-offset': '#146caa',
		'--color-border': '#f1797c',
		'--color-primary': '#b62b2b',
		'--color-primary-offset': '#FF0030',
		'--color-secondary': '#fb9f13',
	},
	hacker: {
		'--color-bg': '#F6F6EF',
		'--color-bg-offset': '#F8F8EC',
		'--color-text': '#000000',
		'--color-text-offset': '#828282',
		'--color-border': '#FF6600',
		'--color-primary': '#FF6600',
		'--color-primary-offset': '#F56200',
		'--color-secondary': '#FF6600',
	},
};

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

	useEffect(() => {
		const root = document.documentElement;
		const selectedTheme = themes[theme];
		console.log(selectedTheme)
		for (const [key, value] of Object.entries(selectedTheme)) {
			root.style.setProperty(key, value);
		}
	}, [theme]);

	return (
			<ThemeContext.Provider value={{theme, setTheme, themes}}>
				{children}
			</ThemeContext.Provider>
	);
};
