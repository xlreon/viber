import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Button, Text } from 'native-base';

export default function HomeScreen() {
  return (
    <Container style={styles.container}>
        <Button>
          <Text>Click Me</Text>
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
  }
})

