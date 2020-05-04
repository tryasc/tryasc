import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { TrLogo } from "./tr"
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

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <AppBar position="static"
      style={{
        padding: 0,
        backgroundColor: "#0834b7"
      }}

     >
      <div
          className="top-nav"
          style={{
            margin: `0 auto`,
            width: 940,
          }}
        >
        <Toolbar

      style={{
        padding: 0,
        position: 'relative'
      }}
      >
          <Typography variant="h6">
            <Link to="/" className='site-title'><TrLogo /> {siteTitle}</Link>
          </Typography>
          <ul style={{ marginBottom: 0, position: 'absolute', right: 0, paddingRight: '10px' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/football/">Football</Link>
            </li>
            <li>
              <Link to="/cheerleading/">Cheerleading</Link>
            </li>
          </ul>
        </Toolbar>
      </div>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
