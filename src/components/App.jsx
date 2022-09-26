import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.jsx';
import Layout from './Page/Layout.jsx';
import Customers from './Sales/Customers.jsx';
import Deposits from './Sales/Deposits.jsx';
import Invoices from './Sales/Invoices.jsx';
import Sales from './Sales/Sales.jsx';
import Users from './Users/Users.jsx';
import Auth from './Auth/Auth.jsx';
import AuthForm from './Auth/AuthForm.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<Deposits />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Route>

        <Route path="auth" element={<Auth />}>
          <Route index element={<AuthForm mode="signin" />} />
          <Route path="signup" element={<AuthForm mode="signup" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
