import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome/Index';
import Login from '../Login/Index';
import Signup from '../SignUp/Index';
import Errorpage from '../ErrorPage/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route exact path='/' element={<Landing/>} />
        <Route path='/welcome' element={<Welcome />} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<Errorpage />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
