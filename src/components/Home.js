import React from 'react';
import { useLoaderData } from 'react-router';
import Course from './Course';


const Home = () => {
  const loadData = useLoaderData([]);
  const coursesData = loadData.data;
  

  return (
    <div className='sm:block md:grid grid-cols-4 text-center mx-36 my-20'>
      {
        coursesData.map(course => <Course 
            key={course.id}
            course={course}
            ></Course>)
      }
    </div>
  );
};

export default Home;