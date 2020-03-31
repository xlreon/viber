import * as React from 'react';
import { StartScreen, TestScreen } from './screens/StartScreen';
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
            <Stack.Navigator>
              <Stack.Screen
                name="Test"
                component={TestScreen}
              />
            </Stack.Navigator>
            </Stack.Navigator>
    </NavigationContainer>
  );
}

