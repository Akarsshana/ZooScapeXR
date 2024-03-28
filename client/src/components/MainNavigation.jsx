import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                {/* <h1 className="title">Environments</h1> */}
                <div className="history">
                    <p className="list">
                        <Link to="/">Home</Link> / <Link to="/explore">Explore</Link>
                    </p>
                </div>
                <nav>
                    <ul>
                        <li className='ar'>
                            <Link to={'/explore/ar'}>AR</Link>
                        </li>
                        <li className='environment'>
                            <Link to={'/explore/environment'}>Environment (VR)</Link>
                        </li>
                        {/* <li className='classroom'>
                            <a href="https://glitch.com/~vivacious-maddening-aquarius">Classroom</a>
                        </li> */}
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

export default MainNavigation