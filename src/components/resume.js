import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src='https://img2.pngio.com/avatar-png-icon-picture-400954-avatar-png-icon-user-avatars-png-512_506.png'
                                alt='avatar'
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}> Omar Muhanna</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(214) 709-0257</p>
                        <h5>Email</h5>
                        <p>omarmuhomar@hotmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>



                    </Cell>

                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education startYear={2016}
                            endYear={2019}
                            schoolName='University of Texas at Dallas'
                            schoolDescription={"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum "}>
                        </Education>

                        <Education startYear={2019}
                            endYear={2020}
                            schoolName='Thinkful'
                            schoolDescription={"Computer Software Engineering "}>
                        </Education>
                        <hr style={{ borderTop: '3px solid #322947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2010}
                            endYear={2020}
                            jobName='Cashier/Waiter/Cook'
                            jobDescription="Description here"
                        >


                        </Experience>
                        <hr style={{ borderTop: '3px solid #322947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='JavaScript'
                            progress={100}
                        ></Skills>

                        <Skills
                            skill='HTML/CSS'
                            progress={80}
                        ></Skills>

                        <Skills
                            skill='NodeJS'
                            progress={50}
                        ></Skills>


                        <Skills
                            skill='React'
                            progress={100}
                        ></Skills>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;

