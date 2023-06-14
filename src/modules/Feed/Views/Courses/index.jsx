import React from 'react'
import Course from '../../components/Course'
import { courses } from '../../store/courseList'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <div className="py-4 px-6 w-full">
        <div className='flex items-center justify-between w-full border-b'>
            <h5 className='text-lg font-semibold text-slate-600'>Courses</h5>
            <Link to="/courses">
               <h5 className='text-blue-600 font-semibold text-sm'>See all</h5>
            </Link>

        </div> 

        <div className='flex flex-col space-y-6 py-6'>
            {courses.map((course)=>{
                 return(
                    <Course 
                      course={course}
                    />
                 )
              })

            }


        </div>  

    </div>
  )
}
