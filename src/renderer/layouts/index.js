import styles from './index.css';
import { Button } from 'antd';
import router from 'umi/router';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <Button onClick={() => router.push('/test.html')}>Test</Button>
        555222288
      {props.children}
    </div>
  );
}

export default BasicLayout;
