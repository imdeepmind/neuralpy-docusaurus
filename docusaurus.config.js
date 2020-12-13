module.exports = {
	title: 'NeuralPy',
	tagline: 'A Keras like deep learning library works on top of PyTorch ',
	url: 'https://www.neuralpy.xyz/',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'imdeepmind',
	projectName: 'NeuralPy',
	themeConfig: {
		colorMode: {
			defaultMode: "dark"
		},
		navbar: {
			title: 'Neuralpy',
			logo: {
				alt: 'NeuralPy Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{ to: 'https://medium.com/@imdeepmind', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/imdeepmind/NeuralPy',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Installation',
							to: 'docs/installation',
						},
						{
							label: 'Get Started',
							to: 'docs/get-started',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Discord',
							href: 'https://discord.gg/ptGEQuy',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/imdeepmind',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: 'https://medium.com/@imdeepmind',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/imdeepmind/NeuralPy',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Abhishek Chatterjee (imdeepmind), Built with Docusaurus.`,
		},
		googleAnalytics: {
			trackingID: 'UA-167763893-1',
			anonymizeIP: true,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					include: ['**/*.md', '**/*.mdx'],
					editUrl: 'https://github.com/imdeepmind/NeuralPy/tree/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	]
};
