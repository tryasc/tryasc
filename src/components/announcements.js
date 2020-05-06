import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Announcements = () => {
  const classes = useStyles();
  return (
    <div className="announcements">
      <p>Due to COVID-19 and the uncertainty of times ahead, we are working on a new registration process for the 2020 season. We have set up an online Google Form for preliminary registration. No money will be collected at this time. Please be aware this does not guarantee there will be a 2020 season, and your registration is not complete until payment is received.  If the 2020 season is approved, birth certificates, additional forms, and payment will be collected.  In order to help families who have been affected financially during this time, we have opted to use a stock uniform to lower the registration costs for 2020.</p>
      <p>Tackle Football and Cheerleading: $125 / Flag Football: $50</p>
      <p>*Please Note: Registration is still on a FIRST COME, FIRST SERVED basis.  Sign up early to reserve your spot!</p>
    </div>
  )
}

export default Announcements
