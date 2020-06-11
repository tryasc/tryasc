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
      <p>Due to COVID-19 and the previous uncertainty of a season, we have implemented a new registration process for the 2020 season. We have set up an online Google Form for preliminary registration.  Once submitted, we will contact you with payment details.  Please be aware your registration is not complete until payment is received.  In order to help families who have been affected financially during this time, we have opted to use an off the shelf uniform to lower the registration costs for 2020.</p>
      <p>Tackle Football and Cheerleading: $125 / Flag Football: $50</p>
      <p>*Please Note: Registration is still on a FIRST COME, FIRST SERVED basis.  Sign up early to reserve your spot!</p>
    </div>
  )
}

export default Announcements
