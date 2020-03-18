import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Button, Text } from 'native-base';

export default function HomeScreen() {
  return (
    <Container style={styles.container}>
        <Button>
          <Text>LOGIN</Text>
	  </Button>
  <Button>
          <Text>SIGN UP</Text>
	</Button>
</Container>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button: {
  //   marginTop: '10px'
  // }
})

