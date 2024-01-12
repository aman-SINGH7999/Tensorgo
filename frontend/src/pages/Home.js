import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

    useEffect(()=>{
      const userdata = localStorage.getItem('user');
      console.log("--------------",JSON.parse(userdata))
      setUser(JSON.parse(userdata))
      if(!userdata) {
        console.log("user home : ", userdata)
        navigate('/login');
      }
    },[])
    

    console.log(user,"H")
    const logout = ()=>{
      localStorage.removeItem('user');
        window.open(
            `http://localhost:8080/auth/logout`,
            "_self"
        );
    }; 

  return (
    <div>{user?.displayName}
        <button onClick={logout}>Logout</button>
        <Link to="/feedback">Feedback</Link>
    </div>
  )
}
