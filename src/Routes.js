import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Landing from './components/Landing/LandingPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />
    }
])


export default router;