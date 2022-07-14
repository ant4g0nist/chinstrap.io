
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','be6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','d60'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','197'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','131'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','2a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','83b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','ec9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','7f1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','c44'),
    exact: true
  },
  {
    path: '/blog/chinstrap-tezos-smart-contract-development',
    component: ComponentCreator('/blog/chinstrap-tezos-smart-contract-development','2da'),
    exact: true
  },
  {
    path: '/blog/chinstrap-tezos-smart-contract-development-repl',
    component: ComponentCreator('/blog/chinstrap-tezos-smart-contract-development-repl','528'),
    exact: true
  },
  {
    path: '/blog/chinstrap-tezos-tezasia-workshop',
    component: ComponentCreator('/blog/chinstrap-tezos-tezasia-workshop','807'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','532'),
    exact: true
  },
  {
    path: '/blog/tags/chinstrap',
    component: ComponentCreator('/blog/tags/chinstrap','43b'),
    exact: true
  },
  {
    path: '/blog/tags/repl',
    component: ComponentCreator('/blog/tags/repl','990'),
    exact: true
  },
  {
    path: '/blog/tags/smart-contracts',
    component: ComponentCreator('/blog/tags/smart-contracts','38c'),
    exact: true
  },
  {
    path: '/blog/tags/tezos',
    component: ComponentCreator('/blog/tags/tezos','d33'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','ea1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','dcf'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','a8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/compilation',
        component: ComponentCreator('/docs/compilation','e8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/conclusion',
        component: ComponentCreator('/docs/conclusion','187'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/faq',
        component: ComponentCreator('/docs/faq','e60'),
        exact: true
      },
      {
        path: '/docs/installation',
        component: ComponentCreator('/docs/installation','001'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/origination',
        component: ComponentCreator('/docs/origination','7f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/repl',
        component: ComponentCreator('/docs/repl','441'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sandbox',
        component: ComponentCreator('/docs/sandbox','8a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing',
        component: ComponentCreator('/docs/testing','201'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/usage',
        component: ComponentCreator('/docs/usage','eba'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','5e9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
