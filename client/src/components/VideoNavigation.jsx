import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Loader from './Loader'

function VideoNavigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                <h1 className="title">Recordings</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/video/forest-video'}>Forest</Link>
                        </li>
                        <li>
                            <Link to={'/video/desert-video'}>Desert</Link>
                        </li>
                        <li>
                            <Link to={'/video/polar-video'}>Polar</Link>
                        </li>
                        <li>
                            <Link to={'/video/aquatic-video'}>Aquatic</Link>
                        </li>
                        <li>
                            <Link to={'/video/grassland-video'}>Grassland</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={'/explore'} className='request'>Visit Environments</Link>
            </section>
            <Loader />
        </Fragment>
    )
}

export default VideoNavigation