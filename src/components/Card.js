import React from 'react'
import { FcLike } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = ({course,likedCourses,setLikedCourses}) => {
   
  function clickHandler() {
      if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id) ));
        toast.warning('liked removed ')
      }else{
        if(likedCourses.length ===0){
          setLikedCourses([course.id])
        }else{
          setLikedCourses(...course,[course.id]);
        }
        toast.success('liked successfully !!!')
      }
  }

  return (
    <div>
       <div>
          <div>
            <img src={course.image.url} alt='courseImage'/>
          </div>
           <div>
              <button onClick={clickHandler}>
                <FcLike fontSize="1.75rem" />
              </button>

           </div>
       </div>
       <div>
         <p>{course.title}</p>
         <p>{course.description}</p>

       </div>
    </div>
  )
}

export default Card
