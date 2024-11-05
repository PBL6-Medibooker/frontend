import Navbar from "./components/navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import GolobalStyles from './globalStyles'
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Appointment from "./pages/Appointment/Appointment";
import Doctors from "./pages/Doctor/Doctors";
import DocInfo from "./pages/DocInfo/DocInfo";
import Specialities from "./pages/Specialities/Specialities";
// import Blog from "./pages/Blog";
// import SpecialitiesInfo from "./pages/SpecialitiesInfo/SpecialitiesInfo";


function App() {
  const location = useLocation();

  const isLRPage = location.pathname === '/login' || location.pathname === '/register' ;

  return (
      <div>
        {!isLRPage && <Navbar/>}
        <GolobalStyles/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/appointment/:docId' element={<DocInfo/>}/>
          <Route path='/specialities' element={<Specialities/>}/>
          <Route path='/specialities/:id' element={<SpecialitiesInfo/>}/>
          <Route path='/blog' element={<Blog/>}/>


        </Routes>
        {!isLRPage && <Footer/>}
      </div>
  );
}

export default App;
