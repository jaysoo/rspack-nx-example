import { Header } from 'ui';

import styles from './app.module.css';

export function App() {
  return (
    <div className={styles['container']}>
      <Header>Hello Rust!</Header>
      <p>NODE_ENV: {process.env['NODE_ENV']}</p>
    </div>
  );
}
