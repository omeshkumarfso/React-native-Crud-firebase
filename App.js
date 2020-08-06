import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUserScreen from './android/app/src/screens/AddUserScreen';
import UserScreen from './android/app/src/screens/UserScreen';
import UserDetailScreen from './android/app/src/screens/UserDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="AddUserScreen" 
        component={AddUserScreen} 
        options={{ title: 'Add User' }}
      />
      <Stack.Screen 
        name="UserScreen" 
        component={UserScreen} 
        options={{ title: 'Users List' }}
      />
      <Stack.Screen 
       name="UserDetailScreen" 
       component={UserDetailScreen} 
       options={{ title: 'User Detail' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}