import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Announcements = () => {
  const classes = useStyles()
  return (
    <div className="announcements">
      <b>**NOTICE TO TRYA FAMILIES**</b>
      <br />
      As school and other activities begin, staying healthy and avoiding the
      spread of sickness (even in areas not related to Covid) has alays been
      important to our organization. We want to be careful and need your help in
      keeping everyone well!
      <p>
        <br />
        If your child has any of these symptoms, please keep them home:
      </p>
      <Grid container>
        <Grid item xs={6}>
          <ul>
            <li>Fever or Chills</li>
            <li>Cough</li>
            <li>Shortness of breath of difficulty breathing</li>
            <li>Fatigue</li>
            <li>Muscle or body aches</li>
            <li>Headache</li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <ul>
            <li>New loss of taste or smell</li>
            <li>Sore throat</li>
            <li>Congestion or runny nose</li>
            <li>Nausea or vomiting</li>
            <li>Diarrhea</li>
          </ul>
        </Grid>
      </Grid>
      <p>
        <b>
          If your child has had close contact with someone who has tested
          positive for Covid, they must stay home from practice and games for 10
          days.
        </b>
        <b>
          If your child tests postivie for Covid, they must stay home from
          practice and games for 10 days.
        </b>
        <b>
          Keeping your child home for illness will not affect playtime once they
          return. We apprecaite everyone's cooperation in keeping our community
          healthy!
        </b>
      </p>
    </div>
  )
}

export default Announcements
