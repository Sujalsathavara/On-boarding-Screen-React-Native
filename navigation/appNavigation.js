import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import OnbordingScreensp from "../Screens/OnbordingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

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
        {isFirstLaunch === "SP1" && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onbording"
            component={OnbordingScreensp}
          />
        )}
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
