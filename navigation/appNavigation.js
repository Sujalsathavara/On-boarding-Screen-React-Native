import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Auths/LoginScreen";
import OnbordingScreensp from "../Screens/OnbordingScreen";
import WelcomScreen from "../Auths/WelcomScreen";
import SignupScreen from "../Auths/SignupScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState("SP0");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("alreadyLaunched", value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      if (value !== null) {
        // value previously stored
        storeData("SP1");
        setIsFirstLaunch("SP1");
      } else {
        setIsFirstLaunch("SP0");
      }
    } catch (e) {
      // error reading value
    }
  };

  console.log(isFirstLaunch);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch === "SP0" && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onbording"
            component={OnbordingScreensp}
          />
        )}
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
