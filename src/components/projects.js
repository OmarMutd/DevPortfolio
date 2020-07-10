import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    // Replace These tabs with the css cards in redfavs?
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    {/* Projects 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center / cover' }}>React Project #1</CardTitle>
                        <CardText>
                            Dummy text lol lol olwwef wef ew fer fe
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Projects 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center / cover' }}>React Project #2</CardTitle>
                        <CardText>
                            Dummy text lol lol olwwef wef ew fer fe
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Projects 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center / cover' }}>React Project #3</CardTitle>
                        <CardText>
                            Dummy text lol lol olwwef wef ew fer fe
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>


                </div>



            )
        } else if (this.state.activeTab === 1) {
            return (
                <h1>Hey</h1>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJs</h1></div>

            )
        }
    }


    render() {
        return (
            <div className='category-tabs'>
                <Tabs actibeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>All</Tab>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS/JS</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className='content'> {this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}


export default Projects;
