import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [data, setData] = useState(null)
	useEffect(() => {
		fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=1b1vTLFDzkG2O7VRGql26GZ6Ly19kCeM').then(res => res.json()).then(data => {
			setData(data)
		}
		)
	}, [])
	console.log(data);
	if (!data) {
		return <div>Loading...</div>
	}
  return (
		<>
			<header className="header responsive-wrapper">
				<div className="header-left">
					New York Times
				</div>
				<div className="header-middle">
					<a href="#" className="header-link">
						Github logo
					</a>
					<span>/</span>
					<a href="#" className="header-link">
						selcukguler.com
					</a>
				</div>
				<div className="header-right">
					<nav className="header-nav">
						<a href="#" className="header-link">
							Login
						</a>
						<a href="#" className="header-link header-link--button">
							Sign Up
						</a>
					</nav>
				</div>
			</header>
			<main className="responsive-wrapper">
				<div className="page-title">
					<h1>Latest Updates</h1>
				</div>
				<div className="magazine-layout">
					<div className="magazine-column">
						<article className="article">
							<h2 className="article-title article-title--large">
								<a href="#" className="article-link">
									{data.results[0].title}
								</a>
							</h2>
							<div className="article-excerpt">
								<p>
									{data.results[0].abstract}
								</p>
							</div>
							<div className="article-author">
								<div className="article-author-img">
									<img src="https://assets.codepen.io/285131/author-3.png" />
								</div>
								<div className="article-author-info">
									<dl>
										<dt>New York Times</dt>
										<dd>{data.results[0].published_date}</dd>
									</dl>
								</div>
							</div>
						</article>
					</div>
					<div className="magazine-column">
						<article className="article">
							<figure className="article-img">
								<img src={data.results[1].media[0]["media-metadata"][2].url} />
							</figure>
							<h2 className="article-title article-title--medium">
								<a href="#" className="article-link">
									{data.results[1].title}
								</a>
							</h2>
							<div className="article-excerpt">
								<p>
									{data.results[1].abstract}
								</p>
							</div>
							<div className="article-author">
								<div className="article-author-img">
									<img src="https://assets.codepen.io/285131/author-2.png" />
								</div>
								<div className="article-author-info">
									<dl>
										<dt>New York Times</dt>
										<dd>{data.results[1].published_date}</dd>
									</dl>
								</div>
							</div>
						</article>
					</div>
					<div className="magazine-column">
						<article className="article">
							<figure className="article-img">
								<img src={data.results[2].media[0]["media-metadata"][2].url} />
							</figure>
							<h2 className="article-title article-title--small">
								<a href="#" className="article-link">
									{data.results[2].title}
								</a>
							</h2>
							<div className="article-creditation">
								<p>{data.results[2].abstract}</p>
							</div>
						</article>
						<article className="article">
							<figure className="article-img">
								<img src={data.results[3].media[0]["media-metadata"][2].url} />
							</figure>
							<h2 className="article-title article-title--small">
								<a href="#" className="article-link">
									{data.results[3].title}
								</a>
							</h2>
							<div className="article-creditation">
								<p>{data.results[3].abstract}</p>
							</div>
						</article>
					</div>
					<div className="magazine-column">
						<article className="article">
							<h2 className="article-title article-title--medium">
								<a href="#" className="article-link">
									Traveller Visiting Ice Cave With Amazing Eye-Catching Scenes
								</a>
							</h2>
							<div className="article-excerpt">
								<p>
									Slack has become indispensible for many businesses operation
									remotely during the pandemic. Here's what the acquisition could
									mean for users...
								</p>
							</div>
							<div className="article-author">
								<div className="article-author-img">
									<img src="https://assets.codepen.io/285131/author-2.png" />
								</div>
								<div className="article-author-info">
									<dl>
										<dt>James Robert</dt>
										<dd>Editor</dd>
									</dl>
								</div>
							</div>
						</article>
						<article className="article">
							<small className="article-category">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									width={28}
									height={22}
									viewBox="0 0 28 22"
								>
									<defs>
										<clipPath id="clip-headphones">
											<rect width={28} height={22} />
										</clipPath>
									</defs>
									<g id="headphones" clipPath="url(#clip-headphones)">
										<g
											id="Group_2"
											data-name="Group 2"
											transform="translate(-3680 -609)"
										>
											<path
												id="Subtraction_1"
												data-name="Subtraction 1"
												d="M5,12H5A5.274,5.274,0,0,1,0,6.5,5.274,5.274,0,0,1,5,1V12Z"
												transform="translate(3680 619)"
											/>
											<rect
												id="Rectangle_18"
												data-name="Rectangle 18"
												width={2}
												height={11}
												transform="translate(3686 620)"
											/>
											<path
												id="Subtraction_5"
												data-name="Subtraction 5"
												d="M1.243,12H.045C.015,11.67,0,11.334,0,11A11,11,0,0,1,18.778,3.222,10.925,10.925,0,0,1,22,11c0,.331-.015.667-.045,1h-1.2a14.108,14.108,0,0,0-2.685-6.241A8.982,8.982,0,0,0,11,2,8.982,8.982,0,0,0,3.929,5.759,14.109,14.109,0,0,0,1.243,12Z"
												transform="translate(3683 609)"
											/>
											<path
												id="Subtraction_6"
												data-name="Subtraction 6"
												d="M5,0H5A5.274,5.274,0,0,0,0,5.5,5.274,5.274,0,0,0,5,11V0Z"
												transform="translate(3708 631) rotate(180)"
											/>
											<rect
												id="Rectangle_23"
												data-name="Rectangle 23"
												width={2}
												height={11}
												transform="translate(3700 620)"
											/>
											<path
												id="Path_8"
												data-name="Path 8"
												d="M.156-.031,2.125-1.687,2,2H0Z"
												transform="translate(3683 619)"
											/>
											<path
												id="Path_9"
												data-name="Path 9"
												d="M1.969-.031,0-1.687.125,2h2Z"
												transform="translate(3702.875 619)"
											/>
										</g>
									</g>
								</svg>
								<span>Post Reports / Podcast</span>
							</small>
							<h2 className="article-title article-title--medium">
								<a href="#" className="article-link">
									Things to Do After 6 P.M Will Enrich{" "}
									<mark className="mark mark--tertiary">Your Life</mark>
								</a>
							</h2>
							<div className="article-podcast-player">
								<button className="podcast-play-button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={192}
										height={192}
										fill="#000000"
										viewBox="0 0 256 256"
									>
										<rect width={256} height={256} fill="none" />
										<path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z" />
									</svg>
								</button>
								<div className="podcast-progression"></div>
								<span className="podcast-time">23:45</span>
							</div>
							<div className="article-podcast-info">
								Apple Podcasts, Google Podcasts, Stitcher
							</div>
							<div className="article-author">
								<div className="article-author-img">
									<img src="https://assets.codepen.io/285131/author-3.png" />
								</div>
								<div className="article-author-info">
									<dl>
										<dt>David Sherof</dt>
										<dd>Reporter</dd>
									</dl>
								</div>
							</div>
						</article>
					</div>
				</div>
			</main>
		</>

  )
}
