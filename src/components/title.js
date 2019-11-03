import React from 'react';
import { Textfit } from 'react-textfit';
import { FaPagelines } from 'react-icons/fa';

const Title = props => (
    <Textfit style={{
        height: `58%`,
    }}
    mode="single"
    forceSingleModeWidth={false}>

        <div style={{
            height: `100%`,
            width: `20em`,
            margin: `auto`,
            color: `#ffffff`
        }}>

            <FaPagelines style={{
                fontSize: `3.4em`,
                marginRight: `0.5em`
            }}/>
            <span style={{
                fontSize: `3.5em`,
                fontFamily: `Dandeleon`
            }}>
                 Aleixo
            </span>
            <FaPagelines style={{
                fontSize: `3.4em`,
                marginLeft: `0.5em`
            }}/>

        </div>
    </Textfit>
);

export default Title;
