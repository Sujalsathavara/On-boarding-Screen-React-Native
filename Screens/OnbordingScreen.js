import React from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

export default function OnbordingScreensp() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}
