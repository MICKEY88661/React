import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-teal-100 to-indigo-100'>
      <Router>
        <nav className='flex items-center justify-center'>
          <Link to='/' className='text-xl floating'> Home </Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
      <footer className='absolute inset-x-0 bottom-0 flex place-content-center'>
        <p className='floating'> made by mickey </p>
      </footer>
    </div>
  );
}
//BiCopyright
export default App;
