import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">
                            About US
                        </h1>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos odio possimus aliquid, nulla sunt reprehenderit molestiae earum doloribus porro corporis. Dolores ipsam distinctio maiores ducimus, harum porro repellendus laboriosam!
                        Asperiores optio nostrum culpa aperiam est repudiandae deleniti eius numquam distinctio, totam vero, fugit a. Cupiditate aspernatur qui, sit voluptate, corporis veniam suscipit omnis, ipsam perferendis maiores perspiciatis voluptatum voluptatem.
                       </p>
                    <Link to={'/'}>
                        Explore Menu{' '}
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
 

                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About