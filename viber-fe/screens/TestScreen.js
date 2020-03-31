import React, { Component } from 'react';
import { Button } from '../components';

class TestScreen extends Component {
    render() {
        return (
            <Button
                buttonText="Click Me"
                onPressHandler={null}
            />
        );
    }
}

export default TestScreen;