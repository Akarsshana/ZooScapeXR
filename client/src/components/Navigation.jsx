// Navigation for Environments

import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                {/* <h1 className="title">Environments</h1> */}
                <div className="history">
                    <p className="list">
                        <Link to="/">Home</Link> / <Link to="/explore">Explore</Link> / <Link to="/explore/environment">Environment</Link>
                    </p>
                </div>
                <nav>
                    <ul>
                        <li className='forest'>
                            <a href="https://water-kindhearted-cruiser.glitch.me/" target='_blank'>Forest</a>
                        </li>
                        {/* <li className='desert'>
                            <a href="https://tender-shy-singularity.glitch.me/" target='_blank'>Desert</a>
                        </li> */}
                        <li className='polar'>
                            <a href="https://magenta-educated-shark.glitch.me/" target='_blank'>Polar</a>
                        </li>
                        {/* <li>
                            <a href="https://twisty-jet-veterinarian.glitch.me" target='_blank'>Aquatic</a>
                        </li> */}
                    </ul>
                </nav>
                {/* <Link to={'/videos'} className='request'>Go To Videos</Link> */}
            </section>
            {/* <Loader /> */}
        </Fragment>
    )
}

export default Navigation
