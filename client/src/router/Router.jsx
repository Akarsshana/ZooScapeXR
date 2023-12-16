import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Theme from '../components/Theme';
import Navigation from '../components/Navigation';
import PageNotFound from '../components/PageNotFound';
import Footer from '../components/Footer';
import Videos from '../components/Videos';
import VideoNavigation from '../components/VideoNavigation';

function Router() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Dashboard />}/>
                <Route path='/explore' element={<Navigation />}/>
                <Route path='/theme' element={<Theme />}/>
                <Route path='/video/forest-video' element={<Videos />}/>
                <Route path='/video/desert-video' element={<Videos />}/>
                <Route path='/video/polar-video' element={<Videos />}/>
                <Route path='/video/polar-video' element={<Videos />}/>
                <Route path='/video/aquatic-video' element={<Videos />}/>
                <Route path='/video/grassland-video' element={<Videos />}/>
                <Route path='/videos' element={<VideoNavigation />}/>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Outlet />
            <Footer />
        </BrowserRouter>
    </Fragment>
  )
}

export default Router