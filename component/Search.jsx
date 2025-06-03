import { Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View className=" flex-row rounded-3xl items-center border-2 pr-10 w-80 py-1 pl-2">
      <Ionicons name="search" size={24} />
      <TextInput placeholder="serach" />
    </View>
  );
};
export default Search;
