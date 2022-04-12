
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import InnerHome from './Components/Home/InnerHome/InnerHome';
import InnerAbout from './Components/Home/InnerAbout/InnerAbout';
import InnerContact from './Components/Home/InnerContact/InnerContact';
import Team from './Components/Home/Team/Team';



function App() {
  return (
    <div className='App'>
  
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/innerHome' element={<InnerHome />}/>
        <Route path='/innerAbout' element={<InnerAbout />}/>
        <Route path='/innerContact' element={<InnerContact />}/>
        <Route path='/team' element={<Team />}/>
      </Routes>
    </div>
  );
}

export default App;
