import React from 'react';
import Banner from "./Banner";
import site1 from "../img/sites/site1.png";
import site2 from "../img/sites/site2.png";
import site3 from "../img/sites/site3.png";
import site4 from "../img/sites/site4.png";
import site5 from "../img/sites/site5.png";
import site6 from "../img/sites/site6.png";
import site6_2 from "../img/sites/site6-2.png";
import nike3d from '../img/sites/nike3d.png'

const MyWork = () => {
	const sites = [
		{
			title: "Utverdil engineer portal",
			siteImg: site5,
			bannerImg: site5,
			desc: 'Developer of an online business portal designed for engineers. The company\'s portal provides ready-made drawings, projects, 3D-models and allows users to place ...\n',
			tags: ["HTML", "CSS", "JS", "Responsive design"],
			Url: 'https://engineer-portal.vercel.app/'
		},
		{
			title: "Agency in a box",
			siteImg: site4,
			bannerImg: site4,
			desc: 'Get content ideas, generate captions that respects brand’s tone of voice, design and plan your publications all in one place',
			tags: ["HTML5", "SCSS", "JS", "Responsive design"],
			Url: 'https://agency-in-a-box.vercel.app/'
		},
		{
			title: "ROBO SCHOOL",
			siteImg: site6,
			bannerImg: site6_2,
			desc: 'Robo School – institution for the formation of a personnel pedagogical reserve in the field robotics programming',
			tags: ["HTML", "SCSS", "JS", "Responsive design"],
			Url: 'https://robo-school-two.vercel.app/'
		},
		{
			title: "Scooter Shop",
			siteImg: site2,
			bannerImg: site3,
			desc: '"Explore our online store for all your boating and outdoor adventure needs. From boat motors to ATVs and everything in between, we\'ve got you covered. Find top-quality products from trusted brands to fuel your next outdoor excursion. Shop now and gear up for unforgettable adventures on land and water!"',
			tags: ["HTML", "CSS", "JQUERY", "Responsive design"],
			Url: 'https://scooter-shop-cyan.vercel.app/'
		},
		{
			title: "Nike sneakers",
			siteImg: nike3d,
			bannerImg: nike3d,
			desc: "3d modeling website",
			tags: ["ThreeJs", "Responsive design"],
			Url: 'https://nike3d.vercel.app//'
		},
		{
			title: "Web dev Portfolio",
			siteImg: site1,
			bannerImg: site1,
			desc: '',
			tags: ["ReactJS", "Responsive design"],
			Url: 'https://react-portfolio-blue-cyan.vercel.app/'
		},
	];
	const [currSite, setCurrSite] = React.useState(0)
	return (
			<section className='work__section'>
				<div className='container'>
					<h2 className='section__title'>My work</h2>
					<Banner site={sites[currSite]}/>
					<div className="work__list-outer">
						<ul className='work__list'>
							{sites.map((site, index) => (
									<li className={`work__item ${index === currSite && 'active'} `} key={index}
											onClick={() => setCurrSite(index)}>
										<p className='work__item-title max-w-lg'>{site.title}</p>
										<img className='work__img' src={site.siteImg} alt="current website"/>
									</li>
							))}
						</ul>
					</div>
				</div>
			</section>
	);
};

export default MyWork;