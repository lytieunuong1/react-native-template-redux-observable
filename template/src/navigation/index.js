import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "~/features/Signup";
import screens from "./screens";
import { defaultNavigationOptions } from "./navigationHelpers";
import Login from "~/features/Login";
import Home from "~/features/Home";

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.home.name} component={Home} />
    </Stack.Navigator>
  )
}
const app = (props) => {
  const { isSignedIn } = props
  return (
    <NavigationContainer>
      {!isSignedIn ? (<Stack.Navigator>
        <Stack.Screen name={screens.login.name} component={Login} options={defaultNavigationOptions} />
        <Stack.Screen name={screens.signup.name} component={Signup} options={defaultNavigationOptions} />
      </Stack.Navigator>) : MainStack()
      }
    </NavigationContainer>
  )
}

export default app