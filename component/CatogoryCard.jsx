import { Image, View, Text } from "react-native";
import React from "react";
import Burger from "../assets/burger.png";

const CatogoryCard = ({ image, text }) => {
  return (
    <View className="w-32 h-32 bg-slate-50/50 rounded-2xl flex items-center justify-center shadow-lg mt-10 ">
      <Image source={image} className="w-full h-full p-5" />
      <Text className="-mt-6 mb-4">{text}</Text>
    </View>
  );
};

export default CatogoryCard;
