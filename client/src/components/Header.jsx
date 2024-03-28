import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Fragment>
        <header>
            <h1 className="logo">ZooScapeXR</h1>
            <button className='btn'>
                <Link to={'/'}>Home</Link>
            </button>
        </header>
    </Fragment>
  )
}

export default Header