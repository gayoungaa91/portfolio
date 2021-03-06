import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
   <div>
     <ul>
       <li>
         <Link to='/'>홈</Link>
       </li>
       <li>
         <Link to='/about'>소개</Link>
       </li>
       <li>
         <Link to="/profile/amy">에이미 프로필</Link>
       </li>
     </ul>
     <Route path='/' component={Home} exact={true}/>
     <Route path='/about' component={About} />
     <Route path='/profile/:username' component={Profile} />
   </div>
  );
}

export default App;
