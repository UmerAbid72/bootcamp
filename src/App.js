import './App.scss';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import Tvshows from './Components/Tvshows';
import Movies from './Components/Movies';
import TopRated from './Components/TopRated';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/LandingPage/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="app">
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path="/home" element={<Home/>} />
    <Route path='/tvshows' element={<Tvshows/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/toprated' element={<TopRated/>}/>
    <Route path='/signup' element={<SignUp/>}/>



    </Routes>



    </div>

    </BrowserRouter>
     </>
  )
} 

export default App;
