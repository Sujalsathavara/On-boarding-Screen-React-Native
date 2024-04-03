import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnbordingScreensp() {
  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("alreadyLaunched", value);
    } catch (e) {
      // saving error
    }
  };

  const skdone = () => {
    storeData("SP1");
    navigation.navigate("Home");
  };

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-red-400" : ""
        }  p-2`}>
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          } rounded-full`}></View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <Onboarding
        onSkip={skdone}
        onDone={skdone}
        DotComponent={DotComponent}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri: "https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top",
                }}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "Happy Shopping",
            subtitle:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri: "https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top",
                }}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "All you need in One PLace",
            subtitle:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri: "https://thumbs.dreamstime.com/b/woman-shopping-sales-happy-young-holding-paper-bags-enjoying-126694001.jpg",
                }}
                className="w-72 h-72 object-contain"
              />
            ),
            title: "Happy Sale, Happy Customer",
            subtitle:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
          },
        ]}
      />
    </View>
  );
}
