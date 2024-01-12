import './App.css';
import { Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feedback from './pages/Feedback';

function App() {

  const getUser = async ()=>{
    try{
      const url = `http://localhost:8080/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials:true});
      console.log("===============",data.user)
      localStorage.setItem("user", JSON.stringify(data.user));

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route  path='/login' element={<Login />} />
        <Route  path='/signup' element={<Signup />} />
        <Route  path='/feedback' element={ <Feedback /> } />
      </Routes>
    </div>
  );
}

export default App;
