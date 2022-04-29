import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flextesa Sandbox',
    Svg: require('@site/static/img/undraw_local_sandbox.svg').default,
    description:(
      'Local sandbox to develop and test contracts'
    )
  },
  {
    title: 'Multi-language support',
    Svg: require('@site/static/img/undraw_developer_activity.svg').default,
    description: (
      'Supports writing contracts in SmartPy, JsLIGO, CameLIGO, PascaLIGO and ReasonLIGO'
    )
  },
  {
    title: 'Testing Your Contracts',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      'Supports scripting and testing in Ligo, Python(SmartPy/PyTest) and JsLIGO, CameLIGO, PascaLIGO and ReasonLIGO'
    )
  },
  {
    title: 'Deploy with confidence',
    Svg: require('@site/static/img/undraw_refreshing_beverage_td3r.svg').default,
    description: (
      'Scriptable origination management for deploying to many public & private networks'
    )
  },
  {
    title: 'Build like the best',
    Svg: require('@site/static/img/undraw_e2e_build_cycle.svg').default,
    description: (
      'End-to-end build cycle support for creation, compilation, testing, and origination of Smart Contracts'
    )
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row items-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
