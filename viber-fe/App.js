import * as React from 'react';
import StartScreen from './screens/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={StartScreen}
            />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

