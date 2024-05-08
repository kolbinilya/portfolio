import React, {useEffect, useRef} from 'react';
import avatar from '../img/photo.jpg';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const NavMenu = ({open, setOpen}) => {
	const [openBurger, setOpenBurger] = React.useState(false);

	const container = useRef();
	const {contextSafe} = useGSAP({scope: container})
	useGSAP(() => {
		// gsap.to(window, {duration: 2, scrollTo: {y: "#someID", offsetY: 50}});
	}, {})
	const onCLickBtn = contextSafe(() => {
		gsap.to('.burger-btn', {rotate: 180, opacity: 1})
	})
	const handleClickBtn = () => {
		gsap.set('.burger-btn', {rotate: 0, opacity: 1});
		onCLickBtn()
		setOpenBurger(!openBurger)
	}

	useEffect(() => {
		const handleScroll = () => {
			setOpenBurger(false); // Закрываем меню при скролле
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
			<nav className='nav' ref={container}>
				<div className="container">
					<div className="nav__inner">
						<div className='nav__logo'>
							<img className='nav__logo-img'
									 src={avatar}
									 alt="author-phoho"
									 width={40}
									 height={40}
							/>
							<span className='nav__logo-name'>Kolbin Ilya</span>
							<svg className="nav__logo-icon" width="24" height="24" viewBox="0 0 24 24" role="img"
									 xmlns="http://www.w3.org/2000/svg">
								<path
										d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
							</svg>
						</div>
						<div className='flex gap-4'>
							<ul className={`nav__list ${openBurger && 'active'}`}>
								<li className='nav__item'>
									<a className='nav__link' href="/">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
										</svg>
										<span>home</span>
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href="#work">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
										</svg>
										<span>work</span>
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href="/">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
										</svg>
										<span>about me</span>
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href="/">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
										</svg>
										<span>contacts</span>
									</a>
								</li>
							</ul>
							<button className='rounded-full p-2 button' onClick={() => setOpen(!open)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="paint"
										 className='w-6 h-6' fill='currentColor'>
									<path fill="none" d="M0 0h24v24H0V0z"></path>
									<path
											d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4h-9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2z"></path>
								</svg>
							</button>
							<button onClick={handleClickBtn}
											className='burger-btn'>
								{openBurger ?
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
										</svg>
										:
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
												 stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round"
														d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
										</svg>
								}
							</button>
						</div>
					</div>

				</div>
			</nav>
	);
};

export default NavMenu;