import * as React from 'react';
import { StyleSheet } from 'react-native'
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook'

export default class StartScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name:'',
        userAuth:[Google,Facebook]
      }
    }

    signIn = async (loginName) => {
        if(loginName==="Google")
        {
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
        else if(loginName==="Facebook")
        {
          try {
            await Facebook.initializeAsync('904059393368641');
            const {
              type,
              token
            } = await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile'],
            });
            if (type === 'success') {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              console.log(response);
              Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
              // type === 'cancel'
            }
          } catch (e) {
            console.log("Error",e);
          }
        } 
        else
        {
          console.log("twitter");
        }     
  }
  
  
  render() {
    return (
      <View style={styles.container}>
          <Button style={styles.buttonStyle} onPress={()=>this.signIn("Google")} title="Google"/>
          <Button style={styles.buttonStyle} onPress={()=>this.signIn("Facebook")} title="FaceBook"/>
          <Button style={styles.buttonStyle} onPress={()=>this.signIn("Facebook")} title="Twitter"/>
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

