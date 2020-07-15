import React from 'react';
import './App.css';
import { Navigation, Layout, Drawer, Header, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='header-color' title={<Link style={{ textDecoration: 'none', color: 'white' }} to='/' className='header-name'>Omar Muhanna</Link>} scroll>
          <Navigation>
            <Link className='Nav-category' to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link> */}
            <Link className='Nav-category' to="/projects">Projects</Link>
            <Link className='Nav-category' to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Omar Muhanna</Link>}>
          <Navigation>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
