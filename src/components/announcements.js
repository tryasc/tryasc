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
      <p><b>**TACKLE FOOTBALL**</b>
        Uniform fittings will be held at First Team (2520 Wade Hampton Blvd, Unit A, Greenville, SC  29615). Please bring your own shoulder pads.  If you need to purchase shoulder pads, First Team will be selling them at a discounted rate to TRYA players.
         <li> 4:00-6:00pm
         <li> June 7 - 8u
         <li> June 9 - 10u
         <li> June 14 - 12u 
         <li> June 16 - make-up
  ______________________________________________________________________________________________________________________________
  
   <p><b>**10u FOOTBALL PLAYERS**</b>
     We are excited to annouce we have enough registrants for two 10u teams!  We will be holding player evaluations in order to assign teams in the most fair way possible.  
      <li>Monday, June 14th
      <li>6:00pm
      <li>Trailblazer Park, upper field
    </div>
  )
}

export default Announcements
