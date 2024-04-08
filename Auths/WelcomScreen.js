import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import skThem from "../them";

export default function WelcomScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: skThem.skWhite }}>
      <View className="flex-1 flex justify-around my-4">
        <Text
          className="font-bold text-4xl text-center"
          style={{ color: skThem.skButton }}>
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 350 }}
          />
        </View>
        <View className="space-x-4">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            className="py-3 mx-7 rounded-xl"
            style={{ backgroundColor: skThem.skButton }}>
            <Text
              className="text-xl font-bold text-center font-bold"
              style={{ color: skThem.skWhite }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="font-semibold my-1">Already have an account?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                className="font-semibold my-1"
                style={{ color: skThem.skButton }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
