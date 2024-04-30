import React from 'react';
import {useTheme} from "../context/ThemeContext";

const ColorOption = ({item}) => {
	const {setTheme, theme, themes} = useTheme()
	const currentThemeColors = themes[item];

	return (
			<li>
				<button
						onClick={() => setTheme(item)}
						className={`themepicker-btn cursor-pointer ${theme === item && 'active'}`}
						style={{backgroundColor: currentThemeColors['--color-bg']}}
				>
					<p className='pb-1' style={{color: currentThemeColors['--color-text']}}>{item}</p>
					<div className='themepciker-palette'>
						<span className='theme-picker-color theme-picker-color--primary'
									style={{backgroundColor: currentThemeColors['--color-primary']}}></span>
						<span className='theme-picker-color theme-picker-color--secondary'
									style={{backgroundColor: currentThemeColors['--color-secondary']}}></span>
						<span className='theme-picker-color theme-picker-color--border'
									style={{backgroundColor: currentThemeColors['--color-border']}}></span>
						<span className='theme-picker-color theme-picker-color--textoffset'
									style={{backgroundColor: currentThemeColors['--color-textoffset']}}></span>
						<span className='theme-picker-color theme-picker-color--text'
									style={{backgroundColor: currentThemeColors['--color-text']}}></span>
					</div>
				</button>
			</li>
	);
};

export default ColorOption;