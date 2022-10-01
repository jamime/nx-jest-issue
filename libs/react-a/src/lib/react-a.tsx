import styles from './react-a.module.css';

/* eslint-disable-next-line */
export interface ReactAProps {}

export function ReactA(props: ReactAProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactA!</h1>
    </div>
  );
}

export default ReactA;
