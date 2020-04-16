import React from 'react';
import { Grid } from '@material-ui/core';

export default function Spacer(props) {
    return(
        <Grid container xs={12} style={{height:props.height}} />
    );
}