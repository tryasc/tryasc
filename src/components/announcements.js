import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

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
        If your child has any of these symptoms, please keep them home: <br />
        <b>Fever or Chills</b> - <b>Cough</b> -{" "}
        <b>Shortness of breath of difficulty breathing</b> - <b>Fatigue</b> -{" "}
        <b>Muscle or body aches</b> - <b>Headache</b> -{" "}
        <b>New loss of taste or smell</b> - <b>Sore throat</b> -{" "}
        <b>Congestion or runny nose</b> - <b>Nausea or vomiting</b> -{" "}
        <b>Diarrhea</b>
      </p>
      <p>
        If your child has had close contact with someone who has tested positive
        for Covid, they must stay home from practice and games for 10 days.
      </p>
      <p>
        If your child tests postivie for Covid, they must stay home from
        practice and games for 10 days.
      </p>
      <p>
        Keeping your child home for illness will not affect playtime once they
        return. We apprecaite everyone's cooperation in keeping our community
        healthy!
      </p>
    </div>
  )
}

export default Announcements
