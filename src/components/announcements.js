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
      <p>Due to COVID-19 and the uncertainty of times ahead, we are working on a new registration process for the 2020 season. We have set up an online Google Form for preliminary registration. No money will be collected at this time. Please be aware this does not guarantee there will be a 2020 season, and your registration is not complete until payment is received. Further information will be sent out as soon as possible.</p>
      <p>*Please Note: Registration is still on a FIRST COME, FIRST SERVED basis. Each team is allowed a maximum of 28 players. We strive to provide an opportunity for all to participate, but if we do not have enough players for a second team in an age group, those registrants after number 28 will not be able to participate.</p>
      <p>Sign up early to get your spot!</p>
    </div>
  )
}

export default Announcements
