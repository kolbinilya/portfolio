import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Social from "./Social";

const Hero = () => {
	gsap.registerPlugin(useGSAP);
	const container = useRef(null);
	useGSAP(
		() => {
			gsap.fromTo(
				".hero__pretitle",
				{
					x: -300,
					opacity: 0,
				},
				{
					x: 0,
					duration: 1,
					opacity: 1,
					scrollTrigger: {
						start: "top-=10",
						toggleActions: "play none none reverse",
					},
				}
			);
			gsap.fromTo(
				".hero__title",
				{
					x: -300,
					opacity: 0,
				},
				{
					x: 0,
					duration: 1,
					opacity: 1,
					delay: 0.5,
					scrollTrigger: {
						start: "top-=10",
						toggleActions: "play none none reverse",
					},
				}
			);
			gsap.fromTo(
				".hero__text",
				{
					x: -300,
					opacity: 0,
				},
				{
					x: 0,
					duration: 1,
					opacity: 1,
					delay: 1,
					scrollTrigger: {
						start: "top-=10",
						toggleActions: "play none none reverse",
					},
				}
			);
		},
		{ scope: container }
	);

	return (
		<div className="hero overflow-hidden" id="hero" ref={container}>
			<div className="container">
				<div className="hero__inner">
					<h1 className="hero__title">I make websites.</h1>
					<p className="hero__pretitle">
						<a href="/">Hello, my name is Ilya</a>
					</p>
					<div className="hero__content">
						<p className="hero__text">
							I’m a front-end developer. I create websites for small and
							medium-sized businesses.
						</p>
					</div>
				</div>
				<Social />
			</div>
		</div>
	);
};

export default Hero;
