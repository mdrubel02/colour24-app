
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/SignUp' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
