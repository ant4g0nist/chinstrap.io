// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chinstrap',
  tagline: "Chinstrap makes developers' lives easier by providing support for multiple contract compilations, tests, and origination on public and private Tezos networks.",
  url: 'https://chinstrap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ant4g0nist', // Usually your GitHub org/user name.
  projectName: 'chinstrap', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ant4g0nist/chinstrap.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ant4g0nist/chinstrap.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Chinstrap',
          src: 'img/logo.png',
        },
        items: [
          {
            href: '/blog',
            position: 'left',
            label: 'Blog',
          },
          {
            href: '/docs',
            position: 'left',
            label: 'Docs',
          },
          {
              href: 'https://github.com/ant4g0nist/chinstrap',
              position: 'right',
              className: 'header-icon-link header-github-link',
              'aria-label': 'GitHub',
            },

            {
              href: 'https://twitter.com/ant4g0nist',
              position: 'right',
              className: 'header-icon-link header-twitter-link',
              'aria-label': 'Twitter',
            },

            {
              href: 'https://t.me/chinstrap_io',
              position: 'right',
              className: 'header-icon-link header-telegram-link',
              'aria-label': 'Telegram',
            },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Docs',
            to: 'https://chinstrap.io/docs',
          },
          {
            label: 'GitHub',
            to: 'https://github.com/ant4g0nist/chinstrap',
          },
          {
            label: 'Twitter',
            to: 'https://twitter.com/ant4g0nist',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()
          } - ant4g0nist`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
