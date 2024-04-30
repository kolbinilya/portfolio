import React from 'react';
import avatar from '../img/photo.jpg';
import {useGSAP} from "@gsap/react";
// import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import gsap from "gsap";

const NavMenu = ({open, setOpen}) => {


	// gsap.registerPlugin(ScrollToPlugin)
	// useGSAP(() => {
	// 	gsap.to(window, {duration: 2, scrollTo: {y: "#someID", offsetY: 50}});
	// }, {})


	return (
			<nav className='nav'>
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
							<ul className='nav__list'>
								<li className='nav__item'><a className='nav__link' href="/">home</a></li>
								<li className='nav__item'><a className='nav__link' href="/">work</a></li>
								<li className='nav__item'><a className='nav__link' href="/">contact</a></li>
							</ul>
							<button className='rounded-full p-2 button' onClick={() => setOpen(!open)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
										 stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round"
												d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>
								</svg>
							</button>
							<button className="burger-btn">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
										 stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
								</svg>
							</button>
						</div>
					</div>

				</div>
			</nav>
	);
};

export default NavMenu;