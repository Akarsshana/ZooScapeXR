import React, { Fragment } from 'react'
import Header from './Header'

function ArNavigation() {
    return (
        <Fragment>
            <Header />
            <section className="page navbar_page">
                {/* <h1 className="title">Environments</h1> */}
                <nav>
                    <ul>
                        <li className='ar_rhino'>
                            <a href="https://maddening-marmalade-push.glitch.me/" target='_blank'>Rhino</a>
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