import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: 'Easy to Use',
		imageUrl: 'img/happiness.svg',
		description: <>NeuralPy provides an easy interface that is suitable for fast prototyping, learning, and research</>,
	},
	{
		title: 'GPU and CPU',
		imageUrl: 'img/graphics-card.svg',
		description: <>As NeuralPy works on top of PyTorch, it can be used on both CPU and GPU very efficiently.</>,
	},
	{
		title: 'Cross-Compatible',
		imageUrl: 'img/two-way.svg',
		description: (
			<>
				NeuralPy models are cross-compatible with PyTorch model, that mean you can use build the model in PyTorch and
				train it on PyTorch oe vice-versa.
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`NeuralPy Deep Learning Library`}
			description="NeuralPy is a High-Level Keras like deep learning library that works on top of PyTorch written in pure Python"
		>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
							to={useBaseUrl('docs/')}
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
