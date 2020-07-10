import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact'
import Projects from './projects'
import Resume from './resume';




const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            {/* <Route component={PageDoesNotExist} /> */}

        </Switch>
    )
}

export default Main;
