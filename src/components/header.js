import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import MuseumNav from "./navbar";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <MuseumNav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;