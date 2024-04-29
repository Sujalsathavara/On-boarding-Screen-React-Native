import React, { useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import skThem from "../them";
import * as Icons from "react-native-heroicons/solid";
// import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

import SkapiManager from "../API/Skapimanager";
import Toast from "react-native-simple-toast";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";

function validateEmail(email) {
  const re =
    /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(email.toLowerCase());
}

export default function SignupScreen() {
  const navigation = useNavigation();

  const scrollViewRef = useRef();

  // const splogin = () => {};

  const autoScroll = () => {
    let offset = 0;
    setInterval(() => {
      offset += 10;
      scrollViewRef.current?.scrollTo({ x: 0, y: offset, animated: true });
    }, 1000);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleSignupsp = () => {
    if (!name) {
      Toast.showWithGravity(
        "PLease Enter Valid Name",
        Toast.LONG,
        Toast.BOTTOM
      );
      return;
    }

    if (!email) {
      Toast.showWithGravity(
        "PLease Enter Valid Email",
        Toast.LONG,
        Toast.BOTTOM
      );
      return;
    }

    if (validateEmail(email) === false) {
      Toast.showWithGravity(
        "PLease Enter Valid Email",
        Toast.LONG,
        Toast.BOTTOM
      );
      return;
    }

    if (!phonenumber) {
      Toast.showWithGravity(
        "PLease Enter Valid Phone Number",
        Toast.LONG,
        Toast.BOTTOM
      );
      return;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="p-2 rounded-tr-2xl rounded-br-2xl ml-0 mt-1"
            style={{ backgroundColor: skThem.skButton }}>
            <Icons.ArrowLeftIcon
              size="20"
              strokeWidth={2}
              style={{ color: skThem.skWhite }}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/logo1.png")}
            style={{ width: 165, height: 165 }}
          />
        </View>
      </SafeAreaView>

      <ScrollView
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: skThem.skButton,
        }}>
        <View
          className="flex-1 px-8 pt-8"
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: skThem.skButton,
          }}>
          <View className="form space-y-2">
            <Text className="text-white ml-2">Full Name</Text>
            <TextInput
              className="p-2 bg-gray-100  rounded-2xl mb-2"
              style={{ color: skThem.skButton }}
              placeholder="Full Name"
              onChange={(e) => setName(e.nativeEvent.text)}
            />

            <Text className="text-white ml-2">Email Address</Text>
            <TextInput
              className="p-2 bg-gray-100  rounded-2xl mb-2"
              style={{ color: skThem.skButton }}
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />

            <Text className="text-white ml-2">Mobile Number</Text>
            <PhoneInput
              defaultValue={phonenumber}
              defaultCode="IN"
              onChangeFormattedText={(text) => {
                isValidNumber(text) ? setPhoneNumber(text) : text;
                console.log(text);
              }}
              className="p-2 bg-gray-100  rounded-2xl mb-2"
              style={{ color: skThem.skButton }}
              layout="first"
              containerStyle={{
                width: "100%",
                marginTop: 8,
                borderRadius: 20,
                height: 50,
              }}
              textContainerStyle={{
                marginBottom: 0,
                paddingBottom: 0,
                marginTop: 0,
                paddingTop: 0,
                borderRadius: 20,
              }}
              disableArrowIcon
              placeholder="Enter Mobile Number"
              keyboardType={"phone-pad"}
            />

            <Text className="text-white ml-2">Password</Text>
            <TextInput
              className="p-2 bg-gray-100 rounded-2xl"
              style={{ color: skThem.skButton }}
              secureTextEntry
              icon={<Text>Show</Text>}
              placeholder="Enter Password"
            />
            <TouchableOpacity className="flex items-end mb-2">
              <Text className="text-white">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3 rounded-xl"
              style={{ backgroundColor: skThem.skpbutton }}
              onPress={handleSignupsp}>
              <Text
                className="font-xl font-bold text-center"
                style={{ color: skThem.skButton }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xl text-white font-bold text-center py-3">
            Or
          </Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-white rounded-2xl">
              <Image
                source={require("../assets/images/google.png")}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-white rounded-2xl">
              <Image
                source={require("../assets/images/facebook.png")}
                className="w-8 h-8"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
            <Text className="text-white font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-yellow-600">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
