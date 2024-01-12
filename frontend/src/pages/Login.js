import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    useEffect(()=>{
      const user = localStorage.getItem('user');

      if(user) {
        console.log("user", user)
        navigate('/');
      }
    },[])
    


    const googleAuth = async ()=>{
        window.open(
            "http://localhost:8080/auth/google",
            "_self"
        );
    }

  return (
    <div>
        <button onClick={googleAuth}>Sign in with Google</button>
        <p>New Here ? 
            <Link to="/signup">Sign Up</Link>
        </p>
    </div>
  )
}
