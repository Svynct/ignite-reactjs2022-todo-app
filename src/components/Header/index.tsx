import logo from '../../assets/logo.svg'

import styles from './index.module.css'

function Header() {
  return (
    <nav className={styles.header}>
      <img src={logo} alt='todo app logo' />
    </nav>
  );
}

export default Header;