import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import colors from './colors';

const styles = {
    navLink: {
        color: colors.primary,
        marginTop: `15%`
    }
};

export default class MuseumNav extends React.Component {
    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render () {
        return (
            <div>
                <Navbar
                    light
                    expand="md"
                    style={{
                        backgroundColor: colors.light,
                        marginBottom: `1.5%`
                    }}
                >
                    <NavbarBrand
                        href="/"
                        className="mr-auto"
                        style={{
                            color: colors.primary,
                            fontWeight: `bold`
                        }}
                    >
            Museu Casal Aleixo
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    href="/page-2"
                                    className="mr-auto py-auto"
                                    style={styles.navLink}
                                >
                  Page 2
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
