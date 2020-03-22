import * as React from 'react';
import { StyleSheet } from 'react-native'
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';

export default class StartScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
    }

    signIn = async () => {
      try {
        const result = await Google.logInAsync({
          androidClientId: "956959997765-v35h5aqm69klm37n5shrctnooqukfdj9.apps.googleusercontent.com",
          scopes: ["profile", "email"]
        })
        result.user && this.setState({name: result.user.name})
      } catch (e) {
        console.log("error", e)
      }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
          <Button style={styles.buttonStyle} onPress={this.signIn} title="Google"/>
          <Button style={styles.buttonStyle} onPress={this.signIn} title="FaceBook"/>
          <Button style={styles.buttonStyle} onPress={this.signIn} title="Twitter"/>
          {this.state.name !== '' && <Text>Hey, {this.state.name}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  buttonStyle: {
    marginTop: 5,
    width: '100%',
    justifyContent: 'space-evenly',
  }
})

