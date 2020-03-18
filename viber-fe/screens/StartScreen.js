import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Button, Text } from 'native-base';

export default function StartScreen() {
  return (
    <Container style={styles.container}>
        <Button style={styles.buttonStyle}>
          <Text>LOGIN</Text>
	      </Button>
        <Button style={styles.buttonStyle}>
            <Text>SIGN UP</Text>
        </Button>
</Container>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonStyle: {
    padding: 5,
    width: '30%',
    justifyContent: 'center'
  }
})

