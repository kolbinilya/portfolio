import React from 'react';


const Banner = ({site}) => {
	return (
			<section className='banner'>
				<div className="banner__inner">
					<div className='banner__img-box'>
						<a href={site.Url} target='_blank' rel="noreferrer" className='banner__img-link'>
							<img className='banner__img' src={site.bannerImg} alt="current website"/>
						</a>
					</div>
					<div className='banner__content'>
						<div className='banner__content-hashtags'>
							{site.tags.map((tag, index) => (
									<p className='banner__content-hashtag' key={index}>{tag}</p>
							))}
						</div>
						<h1 className='banner__content-title'>
							<a href={site.Url} target='_blank' rel="noreferrer">{site.title}</a>
						</h1>
						<p className='banner__content-text'>{site.desc}</p>
						<div className='banner__content-info'>
							<a href={site.Url} target='_blank'
								 className='btn-link'
								 rel="noreferrer"
							>
								<span>open website</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
										 stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round"
												d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Banner;