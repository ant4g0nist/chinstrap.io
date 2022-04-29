
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','ea1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','e5d'),
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
        path: '/docs/sandbox',
        component: ComponentCreator('/docs/sandbox','8a3'),
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
