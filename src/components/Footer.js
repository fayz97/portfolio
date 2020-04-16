import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Spacer from './Spacer';

const useStyles = makeStyles(() => ({
    containerStyle: {
        backgroundColor: '#515151',
        color: '#FFFFFF',
        flexGrow: 1,
        paddingTop: '20px',
        paddingLeft: '5px',
        paddingBottom: '50px',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.containerStyle}>
            <Grid container xs={12} >
                <Typography>
                &copy; 2020 Faizal Ardian Putra
                </Typography>
            </Grid>
            
            <Spacer height="20px" />

            <Grid container xs={12} spacing={1}>
                    <Grid item xs>
                        <Link href="https://www.linkedin.com/in/faizal-ardian-putra-45b3877a/" color="inherit">
                            LinkedIn
                        </Link>
                    </Grid>

                    <Grid item xs>
                        <Link href="https://www.instagram.com/fayz_ard/" color="inherit">
                            Instagram
                        </Link>
                    </Grid>

                    <Grid item xs>
                        <Link href="https://twitter.com/Fayz_28" color="inherit">
                            Twitter
                        </Link>
                    </Grid>
            </Grid>
        </div>
    );
}