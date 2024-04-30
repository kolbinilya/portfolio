import React from 'react';
import {useRef} from "react";
import gsap from "gsap";
// import {TextPlugin} from "gsap/TextPlugin"
import {useGSAP} from "@gsap/react";


const Hero = () => {

	gsap.registerPlugin(useGSAP);
	// gsap.registerPlugin(TextPlugin)
	const container = useRef();

	useGSAP(() => {
		// gsap.to(".hero__title", {rotate: 360});
		gsap.from(".hero__pretitle", {
			y: -300,
			duration: 1,
			opacity: 0
		});
		gsap.from(".hero__title", {
			x: -300,
			duration: 1,
			opacity: 0,
		});
		// gsap.to(".hero__title", {
		// 	duration: 2,
		// 	text: "I make websites.",
		// 	ease: "none",
		// });
		gsap.from(".hero__text", {
			duration: 2,
			opacity: 0,
			delay: 1
		});
	}, {scope: container});

	return (
			<div className='hero' ref={container}>
				<div className='container'>
					<div className="hero__inner">
						<h1 className="hero__title">I make websites.</h1>
						<p className="hero__pretitle"><a href="#">Hello, my name is Ilya</a></p>
						<div className='hero__content'>
							<p className='hero__text'>
								I’m a front-end developer. I also write about the
								web on my blog and elsewhere.
							</p>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Hero;