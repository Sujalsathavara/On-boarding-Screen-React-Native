import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import skThem from "../them";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start mb-5">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="p-2 rounded-tr-2xl rounded-br-2xl ml-0 mt-1"
            style={{ backgroundColor: skThem.skButton }}>
            <ArrowLeftIcon
              size="20"
              strokeWidth={2}
              style={{ color: skThem.skWhite }}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mb-5 ">
          <Image source={require("../assets/images/logo1.png")} />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: skThem.skButton,
        }}>
        <View className="form space-y-2">
          <Text className="text-white ml-2">Email Address</Text>
          <TextInput
            className="p-2 bg-gray-100  rounded-2xl mb-2"
            style={{ color: skThem.skButton }}
            placeholder="Enter Email Address"
          />

          <Text className="text-white ml-2">Password</Text>
          <TextInput
            className="p-2 bg-gray-100 rounded-2xl"
            style={{ color: skThem.skButton }}
            secureTextEntry
            placeholder="Enter Password"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-white">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 rounded-xl"
            style={{ backgroundColor: skThem.skpbutton }}>
            <Text
              className="font-xl font-bold text-center"
              style={{ color: skThem.skButton }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-white font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-white rounded-2xl">
            <Image
              source={require("../assets/images/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-white rounded-2xl">
            <Image
              source={require("../assets/images/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
