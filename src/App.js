import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Link className='route-link' to={'/'}> Home</Link>
      <Link className='route-link' to={'about'}>About</Link>
      <Link className='route-link' to={'user'}>user</Link>
      <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>}/>
          <Route path='/user' element={<Users></Users>} />
          <Route path={'/user/:id'} element={<UserDetails></UserDetails>} />
      </Routes>
    </div>
  );
}

export default App;
