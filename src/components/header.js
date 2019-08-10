import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MuseumNav from './navbar';

const Header = ({ siteTitle }) => (
    <header
        style={{
        }}
    >
        <MuseumNav/>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
