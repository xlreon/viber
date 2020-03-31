import React, { Component } from 'react';
import { Button as BaseButton, Text } from 'native-base';

class Button extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { buttonText } = this.props;

        return (
        <BaseButton>
            <Text>
                {buttonText || "Button"}
            </Text>
        </BaseButton>
        );
    }
}

export default Button