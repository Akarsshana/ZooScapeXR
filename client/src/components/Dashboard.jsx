import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <Fragment>
            <section className="page dashboard_page">
                <div className="main">
                    <div className="content">
                        <h1 className="dashboard_title">ZooScapeXR</h1>
                        <p className="welnote">Zooscape XR is a virtual platform for schools and museums to display species of flora and fauna and their ecosystems, virtually and augumentally. With Zooscape XR, we’ll able to view different parts of nature and ecosystem visually using mobile phone or through XR extension module which gives a derivative parallel realism between reality</p>
                    </div>
                    <div className="buttons">
                        <button className="btn">
                            <a href="https://maize-peppermint-bead.glitch.me/" target="_blank">Class Room</a>
                        </button>
                        <button className="btn">
                            <Link to={'/explore'}>Explore</Link>
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Dashboard