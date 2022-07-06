import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Detail from './views/Detail';
import Home from './views/Home';
import History from './views/History';

function App() {
  return (
    <div className='relative min-h-screen pb-8 bg-gradient-to-b from-teal-100 to-indigo-100'>
      <Router>
        <nav className='flex items-center justify-center'>
          <Link to='/' className='text-xl floating'> Home </Link>
          <Link to='/history' className='text-xl floating'> History </Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:todoID" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
      <footer className='absolute bottom-0 inset-x-0 flex place-content-center pb-2'>
        <p className='floating'> made by mickey88661 </p>
      </footer>
    </div>
  );
}
//BiCopyright
export default App;
