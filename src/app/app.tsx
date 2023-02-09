import styles from './app.module.css';

export function App() {
  return (
    <div className={styles['container']}>
      <h1 data-testid="header" className={styles['header']}>Hello Rust!</h1>
      <p>NODE_ENV: {process.env['NODE_ENV']}</p>
    </div>
  );
}
