import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import colors from './colors';
import Icon from './icon';

const styles = {
    button: {
        color: colors.primary,
        border: `1px solid ${ colors.primary }`,
        padding: `10px`,
        maxWidth: `95%`
    },
    absolute: { position: `absolute` }
};

class Story extends Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle () {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render () {
        return (
            <div>
                <Icon outline onClick={this.toggle} style={styles.button}>
          Meias
                </Icon>
                <Collapse isOpen={this.state.collapse} style={styles.absolute}>
                    <Card style={styles.absolute}>
                        <CardBody style={styles.absolute}>{this.props.children}</CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Story;
