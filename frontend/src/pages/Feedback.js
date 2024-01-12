import React, {useState, useEffect} from 'react'
import Stars from '../components/Stars';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Feedback() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(()=>{
      const userdata = localStorage.getItem('user');
      setUser(JSON.parse(userdata));

      if(!userdata) {
        console.log("user", userdata)
        navigate('/login');
      }
    },[])

    const [ratingFeature, setRatingFeature] = useState(null);
    const [ratingPrice, setRatingPrice] = useState(null);
    const [ratingUsability, setRatingUsability] = useState(null);
    const [commentFeature, setCommentFeature] = useState("");
    const [commentPrice, setCommentPrice] = useState("");
    const [commentUsability, setCommentUsability] = useState("");


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            
            const { data } = await axios.post("http://localhost:8080/api/v1/feedback-store",{
                ratingFeature,
                commentFeature,
                ratingPrice,
                commentPrice,
                ratingUsability,
                commentUsability,
                user,
            })
            if(data?.success){
                navigate('/');
            }
        }catch(err){
            console.log(err);
        }
        
    }

  return (
    <div className='container d-flex justify-content-center mt-5'>
        <form style={{width:"50vw"}} onSubmit={handleSubmit}> 
            <h3 className='text-center'>Rate the Product</h3>
            <Stars 
                rating={ratingFeature} setRating={setRatingFeature} 
                category={"Features"} 
                comment = {commentFeature} setComment = {setCommentFeature}
            />
            <Stars 
                rating={ratingPrice} setRating={setRatingPrice} 
                category={"Price"} 
                comment = {commentPrice} setComment = {setCommentPrice}
            />
            <Stars 
                rating={ratingUsability} setRating={setRatingUsability} 
                category={"Usability"} 
                comment = {commentUsability} setComment = {setCommentUsability}
            />
            <div className='text-center'>
                <button className='btn btn-success ms-auto' type='submit'>SUBMIT</button>
            </div>
         </form>
    </div>
  )
}
