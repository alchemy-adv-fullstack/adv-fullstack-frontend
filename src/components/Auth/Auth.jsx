import { Link, Outlet } from 'react-router-dom';

export default function Auth() {
  return (
    <div>
      <h1>Auth</h1>
      <nav>
        <Link to="">Sign In</Link>
        <Link to="signup">Sign Up</Link>
      </nav>
      <Outlet />
    </div>
  );
}
