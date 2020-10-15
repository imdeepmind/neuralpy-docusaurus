module.exports = {
  title: 'NeuralPy',
  tagline: 'A Keras like deep learning library works on top of PyTorch ',
  url: 'https://www.neuralpy.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'imdeepmind', // Usually your GitHub org/user name.
  projectName: 'NeuralPy', // Usually your repo name.
  themeConfig: {
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
        {to: 'https://medium.com/@imdeepmind', label: 'Blog', position: 'left'},
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
      copyright: `Copyright © ${new Date().getFullYear()} Abhishek Chatterjee (imdeepmind), Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
