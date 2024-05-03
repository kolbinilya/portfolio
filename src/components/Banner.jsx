import React from 'react';


const Banner = ({site}) => {
	return (
			<section className='banner'>
				<div className="banner__inner">
					<div className='banner__img-box'>
						<a href={site.Url} target='_blank' className='banner__img-link'>
							<img className='banner__img' src={site.siteImg} alt="current website"/>
						</a>
					</div>
					<div className='banner__content'>
						<div className='banner__content-hashtags'>
							{site.tags.map(tag => (
									<p className='banner__content-hashtag' key={tag}>{tag}</p>
							))}
						</div>
						<h1 className='banner__content-title'>
							<a href={site.Url} target='_blank'>{site.title}</a>
						</h1>
						<p className='banner__content-text'>{site.desc}</p>
						<div className='banner__content-info'>
							<p>{site.createdAt}</p>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Banner;