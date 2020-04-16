import React from 'react';
import MenuBar from '../components/MenuBar';
import { Grid, Avatar, Typography, Chip, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Spacer from '../components/Spacer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
    avatar: {
        width: '220px',
        height: '200px',
        border: '5px solid #131413',
    },
    name: {
        letterSpacing: '2px',
    }
}));

export default function Home() {

    const classes = useStyles();

    return(
        <div className="Home">
            <Grid container>
                {/* Menu Bar Web */}
                <Grid item xs={12}>
                    <MenuBar />
                </Grid>

                <Spacer height="100px"/>

                <Grid container xs={12} justify="center">
                    <Avatar alt="Faizal Ardian Putra" src="/assets/self.png" className={classes.avatar} />
                </Grid>
                
                <Spacer height="20px"/>

                <Grid container xs={12} justify="center">
                    <Typography variant="h4" className={classes.name}>
                        Faizal Ardian Putra
                    </Typography>
                </Grid>
                <Grid container xs={12} justify="center" style={{fontSize:'16pt'}}>
                    Backend Developer
                </Grid>

                <Spacer height="30px"/>

                <Grid container xs={12} justify="center" style={{fontSize:'10pt'}}>
                    Programming Language :
                </Grid>
                <Spacer height="10px"/>
                <Grid container xs={12} justify="center" style={{fontSize:'10pt', margin:'10px'}}>
                    <Chip label="PHP" style={{background:'#09fc05'}}/>
                    <Chip label="JavaScript" style={{background:'#f4fc05'}} />
                    <Chip label="SQL" style={{background:'#09fc05'}} />
                    <Chip label="Dart" style={{background:'#fc3402'}} />
                    <Chip label="Python" style={{background:'#fc3402'}} />
                    <Chip label="Java" style={{background:'#fc3402'}} />
                </Grid>

                <Spacer height="50px"/>

                <Grid container xs={12} justify="center" style={{fontSize:'10pt'}}>
                    Tools / Framework :
                </Grid>
                <Spacer height="10px"/>
                <Grid container xs={12} justify="center" style={{fontSize:'10pt', margin:'10px'}}>
                    <Chip label="Laravel" style={{background:'#09fc05'}}/>
                    <Chip label="Yii" style={{background:'#09fc05'}} />
                    <Chip label="CodeIgniter" style={{background:'#09fc05'}} />
                    <Chip label="Flutter" style={{background:'#fc3402'}} />
                    <Chip label="React" style={{background:'#f4fc05'}} />
                    <Chip label="Vue" style={{background:'#f4fc05'}} />
                </Grid>

                <Spacer height="100px"/>

                <Grid container xs={12} style={{margin:"5px"}}>
                    <Grid item xs={12}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant="h3">
                                    About Me
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    I'm a Software Developer that have speciality on Backend Developing with PHP. 
                                    I Have Been Developed With Couple of PHP's Frameworks. Such as, Laravel, Yii2, CodeIgniter. 
                                    I'm eager to keep the best performance as much as i can. I Liked to make my code to be Clean, 
                                    Scalable and Reusable for Other's Developers.I want to keep improving my skills in making a 
                                    Clean Code. Because,  I Enjoy making a simple component code to be a pretty much complex code 
                                    that will be easy to use and scalable in a future time. And also I'm willing to learn a new 
                                    Techonolgy.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>

                <Spacer height="100px"/>
                
                <Footer />
                
            </Grid>
        </div>
    );
}