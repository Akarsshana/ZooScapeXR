import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function ArNavigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                {/* <h1 className="title">Environments</h1> */}
                <div className="history">
                    <p className="list">
                        <Link to="/">Home</Link> / <Link to="/explore">Explore</Link> / <Link to="/explore/ar">AR</Link>
                    </p>
                </div>
                <nav>
                    <ul>
                        <li className='ar_rhino'>
                            <a href="https://maddening-marmalade-push.glitch.me/" target='_blank'>Rhino</a>
                        </li>
                        <li className='ar_bison'>
                            <a href="https://humdrum-trusting-mongoose.glitch.me/" target='_blank'>Bison</a>
                        </li>
                        <li className='ar_elephant'>
                            <a href="https://fixed-north-tenor.glitch.me/" target='_blank'>Elephant</a>
                        </li>
                        <li className='ar_lion'>
                            <a href="https://pebble-spangle-tea.glitch.me/" target='_blank'>Lion</a>
                        </li>
                        <li className='ar_deer'>
                            <a href="https://bald-childish-nutria.glitch.me/" target='_blank'>Deer</a>
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

export default ArNavigation