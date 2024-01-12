import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

export default function Stars({rating, setRating, category, comment, setComment}) {
    const [color] = useState(null);
  return (
    <div className='d-flex flex-column m-3'>
        <div className='d-flex justify-content-between'>
            <div>Its {category}</div>
            <div className='d-flex'>
                {
                [...Array(5)].map((star,index)=>{
                    const currentRate = index + 1;
                    return (
                        <div key={index}>
                            <label>
                            <input 
                                type='radio' 
                                name='rate' 
                                value={currentRate}
                                onClick={()=>setRating(currentRate)}
                                hidden
                            />
                            <FaStar 
                                size={30}
                                color={ currentRate <= (color || rating) ? "yellow" : "grey"}
                            />
                            </label>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div>
            <h6>Add a comment</h6>
            <textarea className='form-control' name="" id="" rows="3" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
        </div>
    </div>
  )
}
