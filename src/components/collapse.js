import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import colors from './colors';
import Icon from './icon';

const styles = {
  button: {
    color: colors.snow,
    border: `1px solid ${colors.primary}`,
    padding: `10px`,
    maxWidth: `95%`,
    backgroundColor: colors.primary
  },
  jumbotron: {
  }
};

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
                    Meias
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
}

export default Story;