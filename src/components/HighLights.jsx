import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlights from './ui/Highlights'

const HighLights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlights icon={<FontAwesomeIcon icon="bolt" />} 
                        title="Easy and Quick"
                        para="Lorem ipsum dolor sit amet." />

                        <Highlights icon={<FontAwesomeIcon icon="book-open" />} 
                        title="10,000+ Books"
                        para="Lorem ipsum dolor sit amet." />

                        <Highlights icon={<FontAwesomeIcon icon="tags" />} 
                        title="Affordable"
                        para="Lorem ipsum dolor sit amet." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighLights