import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Loader from './Loader'

function Navigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                <h1 className="title">Environments</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="https://palm-dorian-swoop.glitch.me" target='_blank'>Forest</a>
                        </li>
                        <li>
                            <a href="https://tender-shy-singularity.glitch.me/" target='_blank'>Desert</a>
                        </li>
                        <li>
                            <a href="https://five-superficial-trunk.glitch.me" target='_blank'>Polar</a>
                        </li>
                        <li>
                            <Link to={'/theme'}>Aquatic</Link>
                        </li>
                        <li>
                            <Link to={'/theme'}>Grassland</Link>
                        </li>
                        <li>
                            <Link to={'/theme'}>Museum</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={'/videos'} className='request'>Go To Videos</Link>
            </section>
            <Loader />
        </Fragment>
    )
}

export default Navigation
