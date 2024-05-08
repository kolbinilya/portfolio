import React from "react";
import ColorOption from "./ColorOption";

const ThemeChanger = ({open, setOpen}) => {
	const themeNames = ['default', 'dark', 'beach', 'choco', 'momo_farm', 'browser', 'lobster', 'hacker']

	const handleButtonClick = () => {
		setOpen(!open);
	};

	return (
			<div className={`colorChanger ${open && 'open'}`}>
				<div className='text-center py-4 relative'>
					<h3 className='font-semibold'>Select Theme</h3>
					<button onClick={handleButtonClick}
									className='absolute top-3 right-3 transition ease-in-out delay-150 duration-300 hover:rotate-270'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
								 stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
						</svg>
					</button>
				</div>
				<ul className='colorChanger-list flex gap-4 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap px-4 pb-7 justify-center'>
					{themeNames.map(item => <ColorOption key={item} item={item}/>)}
				</ul>

			</div>
	);
};

export default ThemeChanger;
