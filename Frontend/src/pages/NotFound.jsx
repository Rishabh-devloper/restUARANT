import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>Looks Like U are Lost</h1>
        <p>We can't seem to find the page tha u are looking for</p>
        <Link to={'/'}>
          Back Home{' '}
          <span>
            <HiOutlineArrowNarrowRight />
             
            
          </span>
        </Link>
      </div>
    </section>
  )
}

export default NotFound