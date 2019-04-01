import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import colors from './colors';
import Icon from './icon';

const styles = {
    button :{
        color: colors.primary,
        border: `1px solid ${colors.primary}`,
        padding: `10px`,
    }
}

class Story extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.state = { collapse1: false, collapse2: false };
    }

    toggle1() {
        this.setState(state => ({ collapse1: !state.collapse1 }));
    }

    toggle2() {
        this.setState(state => ({ collapse2: !state.collapse2 }));
    }

    render() {
        return (
          <div>
            <Icon outline onClick={this.toggle1} style={styles.button}>
              Story
            </Icon>
            <Icon outline onClick={this.toggle2} style={styles.button}>
              Serviços
            </Icon>

            <Collapse isOpen={this.state.collapse1}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high
                  life accusamus terry richardson ad squid. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={this.state.collapse2}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high
                  life accusamus terry richardson ad squid. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
    }
}

export default Story;