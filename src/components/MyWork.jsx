import React from 'react';
import Banner from "./Banner";
import site1 from "../img/sites/site1.png";
import site2 from "../img/sites/site2.png";

const MyWork = () => {
	const [sites, setSites] = React.useState([
		{
			title: "WebSite1",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["React", "HTML", "CSS"],
			Url: 'https://react-portfolio-blue-cyan.vercel.app/'
		},
		{
			title: "WebSite2",
			siteImg: site2,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["HTML5", "SCSS", "JS"],
			Url: 'https://scooter-shop-cyan.vercel.app/'
		},
		{
			title: "WebSite1",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["React", "HTML", "CSS"],
			Url: ''
		},
		{
			title: "WebSite2",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["HTML5", "SCSS", "JS"],
			Url: 'https://react-portfolio-blue-cyan.vercel.app/'
		},
		{
			title: "WebSite1",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["React", "HTML", "CSS"],
			Url: ''
		},
		{
			title: "WebSite2",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["HTML5", "SCSS", "JS"],
			Url: 'https://react-portfolio-blue-cyan.vercel.app/'
		},
		{
			title: "WebSite1",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["React", "HTML", "CSS"],
			Url: ''
		},
		{
			title: "WebSite2",
			siteImg: site1,
			desc: 'thi si one site',
			createdAt: '12:45',
			tags: ["HTML5", "SCSS", "JS"],
			Url: 'https://react-portfolio-blue-cyan.vercel.app/'
		},
	]);
	const [currSite, setCurrSite] = React.useState(0)
	return (
			<section className='work__section'>
				<div className='container'>
					<h2 className='section__title'>My work</h2>
					<Banner site={sites[currSite]}/>
					<div className="work__list-outer">
						<ul className='work__list'>
							{sites.map((site, index) => (
									<li className='work__item' key={site.title} onClick={() => setCurrSite(index)}>
										<p className='work__item-title'>{site.title}</p>
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