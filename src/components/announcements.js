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
      <p>Greetings, TRYA Families. We are incredibly excited to be back on the fields for games and practice! As school and other activities begin, staying healthy and avoiding the spread of sickness (even in areas not related to Covid) has always been important to our organization. We want to be careful and need your help in keeping everyone well! Please use the following guidelines:</p>
      <ul>
        <li>If your athlete or anyone in direct contact with your athlete is sick, please stay home.</li>
        <li>Communication is key. Please communicate with your coaches about any sickness.</li>
        <li>Staying home due to illness will not impact an athlete’s playing time or position on the team/squad.</li>
        <li>We need everyone’s help and cooperation keeping our athletes safe and healthy on and off the field.</li>
      </ul>

      <p>We look forward to a great season ahead, and Go Devildogs!</p>
    </div>
  )
}

export default Announcements
