import React from 'react'
import {data } from '../restApi.json'
const Qualities = () => {
    return (
        <section className='qualities' id='qualities'>
            <div className="container">
                {
                    data[0].ourQualities.map((elements) => {
                        return (
                            <div key={elements.id} className=' card '>
                                <img src={elements.image} alt={elements.title} />
                                <p className="title">{elements.title}</p>
                                <p className='description'>{elements.description}</p>
                            </div>

                        )
                    })
                }
            </div>

        </section>
    )
}

export default Qualities