import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import poemImage from '../../../static/img/poem.png'

const FeatureList = [
  {
    title: 'Easy to Use',
    image: poemImage,
    description: (
      <>
        Just words.<br/>
        Sometimes in verse, sometimes in quiet lines of prose.<br/>
        All shaped by feeling, shared with honesty.<br/>
        Welcome.
      </>
    ),
  },
];

function Feature({image, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{description}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
