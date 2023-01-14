import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Signup from './signup/Signup';
import Login from './login/Login';
import Navbar from './navbar/Navbar';
import Admin from './admin/Admin';
import EditMember from './editMember/EditMember';
import Billing from './billing/Billing';
import Error404 from './error404/Error404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/edit/:userId" element={<EditMember/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
