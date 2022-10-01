import styles from './react-b.module.css';
import { ReactA } from '@example/a';
/* eslint-disable-next-line */
export interface ReactBProps {}

export function ReactB(props: ReactBProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactB!</h1>
      <ReactA />
    </div>
  );
}

export default ReactB;
