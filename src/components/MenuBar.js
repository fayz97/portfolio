import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    app_bar: {
        background: '#000000',
    },
    title: {
        // padding: '20px',
        textAlign: 'center',
        letterSpacing: '10px',
    }
}));

export default function MenuBar() {
    
    const classes = useStyles();

    // Render
    return (
        <div className="MenuBar">
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant="h6" className={classes.title}>
                                PORTFOLIO
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}