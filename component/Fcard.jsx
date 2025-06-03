import { Image, Text, View } from "react-native";
import React from "react";
import bcard from "../assets/Fbackground.jpeg";

const Fcard = () => {
  return (
    <View className="w-96 h-48 rounded-3xl overflow-hidden mt-4 relative">
      <Image source={bcard} className="w-full h-full z-1" resizeMode="cover" />
      <Text className="absolute z-10 text-white text-xl  mt-16 ml-3 font-bold">
        HOT SPICY
      </Text>
      <Text className="absolute z-10 text-white text-xl  mt-24 ml-3 font-bold">
        CHICKEN BURGER
      </Text>
      <Text className="absolute z-10 text-white text-sm  mt-36 ml-3 font-bold">
        Limited offer / 10 SAR
      </Text>
    </View>
  );
};

export default Fcard;
