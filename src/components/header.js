import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { TrLogo } from "./tr"
import { Menu, Container, MenuItem, Box, IconButton, AppBar, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ siteTitle }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        padding: 0,
        backgroundColor: "#0834b7",
      }}
    >
    <Container maxWidth="xl" className="top-nav"
        style={{
          margin: `0 auto`,
          width: 940,
        }}
    >
        <Toolbar
          style={{
            padding: 0,
            position: "relative",
          }}
        >
          <Typography variant="h6">
            <Link to="/" className="site-title">
              <TrLogo /> {siteTitle}
            </Link>
          </Typography>
          <Box style={{ marginTop: "-75px", padding: 0}} display={{ xs: 'none', md: 'flex' }}>
            <ul style={{ marginBottom: 0, paddingRight: "10px" }}>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/football/" activeClassName="active">
                  Football
                </Link>
              </li>
              <li className="cheerleading">
                <Link to="/cheerleading/" activeClassName="active">
                  Cheerleading
                </Link>
              </li>
              <li className="restival">
                <Link to="/restival/" activeClassName="active">
                  Travelers Restival
                </Link>
              </li>
              <li className="auction">
                <Link to="/auction/" activeClassName="active">
                  Silent Auction
                </Link>
              </li>
            </ul>
          </Box>
          <Box display={{ xs: 'flex', md: 'none' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              display={{ xs: 'block', md: 'none' }}
              style={{ float: 'right' }}
            >
              <MenuItem key='football' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/football/" activeClassName="active">
                    Football
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key='cheerleading' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/cheerleading/" activeClassName="active">
                    Cheerleading
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key='restival' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/restival/" activeClassName="active">
                    Travelers Restival
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key='auction' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/auction/" activeClassName="active">
                    Silent Auction
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
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
