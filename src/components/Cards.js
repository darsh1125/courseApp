import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses}) => {
   
  const [likedCourses,setLikedCourses] = useState([]);
  
  function getAllCourse() {
    let allCourses = [];
    Object.values(courses).forEach(courseCategary=>{
        courseCategary.forEach(course=>{
           allCourses.push(course);
        });
    });

    return allCourses;

  }


  return (
    <div>
     {
        getAllCourse().map((course)=>{
          return <Card key={course.id}
           course={course}
           likedCourses={likedCourses}
           setLikedCourses={setLikedCourses}
           />
        })
     }
      
    </div>
  )
}

export default Cards
