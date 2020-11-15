import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles }from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';

import animationData from '../animations/landinganimation/data';

const useStyles =makeStyles(theme => ({


}))

export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item>
            <div> Learning React and Material-UI<br /> to get sh!* done</div>
            <Grid container>
              <Grid item>
                <Button varient="contained"> Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button varient="outlined">
                  Learn More
                  <ButtonArrow width={15} height={15} fill="red" />
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />)
        </Grid>
      </Grid>
    </Grid>
  </Grid>


);

}
