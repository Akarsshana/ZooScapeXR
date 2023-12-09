import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Loader from './Loader'

function Navigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/theme'}>Forest</Link>
                        </li>
                        <li>
                            <Link to={'/theme'}>Desert</Link>
                        </li>
                        <li>
                            <Link to={'/theme'}>Polar</Link>
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
            </section>
            <Loader />
        </Fragment>
    )
}

export default Navigation
