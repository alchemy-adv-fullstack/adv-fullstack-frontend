import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="sales">Sales</NavLink>
      <NavLink to="users">Users</NavLink>
      <NavLink to="auth">Auth</NavLink>
    </nav>
  );
}
