import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="https://img2.pngio.com/avatar-png-icon-picture-400954-avatar-png-icon-user-avatars-png-512_506.png"
                            alt='avatar'
                            className='avatar-img' />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>React | HTML | CSS | JavaScript | Git | NodeJS | Express | PostgreSQL</p>

                            <div className='social-links'>

                                {/* Add Tooltips for icons */}

                                {/* Linkedin */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>

                                {/* Github */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />

                                </a>

                                {/* Email */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-envelope" aria-hidden="true" />

                                </a>

                                {/* Resume */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-file" aria-hidden="true" />

                                </a>

                                {/* Add Icons for tech here From ANport? */}



                            </div>

                        </div>

                    </Cell>

                </Grid>


            </div>
        )
    }
}

export default Landing;
