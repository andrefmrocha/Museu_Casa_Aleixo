import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import colors from './colors';
import Icon from './icon';

const styles = {
    button: {
        color: colors.primary,
        border: `1px solid ${colors.primary}`,
        padding: `10px`,
        maxWidth: `95%`
    }
}

class Story extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false};
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {
        return (
            <div>
                <Icon outline onClick={this.toggle} style={styles.button}>
                    {this.props.title}
                </Icon>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                {this.props.children}
                            </CardBody>
                        </Card>
                    </Collapse>
            </div>
        );
    }

    // propTypes = {
    //     title: PropTypes.string.isRequired,
    //     text: PropTypes.string.isRequired
    // };
}

export default Story;