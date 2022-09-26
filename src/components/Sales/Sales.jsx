import { Outlet, Link } from 'react-router-dom';

export default function Sales() {
  return (
    <div>
      <h1>Sales</h1>
      <nav>
        <Link to="">Deposits</Link>
        <Link to="invoices">Invoices</Link>
        <Link to="customers">Customers</Link>
      </nav>
      <Outlet />
    </div>
  );
}
