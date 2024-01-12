
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();

    useEffect(()=>{
      const user = localStorage.getItem('user');

      if(user) {
        console.log("user", user)
        navigate('/');
      }
    },[])

    console.log("---------signup-------")
    const googleAuth = async ()=>{
        window.open(
            `http://localhost:8080/auth/google/callback`,
            "_self"
        );
    }

  return (
    <div>
        <button onClick={googleAuth}>Sign up with Google</button>
        <p>Already Have Account ? 
            <Link to="/login">Log in</Link>
        </p>
    </div>
  )
}
