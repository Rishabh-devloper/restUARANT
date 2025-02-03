import React, { useState ,useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';



const Success = () => {
  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevCount) => {
        if (prevCount === 0) {
          clearInterval(intervalId)
          navigate("/");
        }
        return prevCount -1 ;
      });
      
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="Success" />
          <h1>Redirecting to home in {countDown} seconds....</h1>
         
        </div>
      </section>
    </>
  );
};

export default Success;

    
  
  
