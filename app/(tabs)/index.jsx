import { View, Text, Image } from "react-native";
import React from "react";
import Icard from "../../assets/Fbackground.jpeg";
import { SearchBar } from "react-native-elements";
import Search from "../../component/Search.jsx";
import Fcard from "../../component/Fcard.jsx";
import ShowCato from "../../component/ShowCato.jsx";

const Home = () => {
  return (
    <View className="flex-1 items-center mt-32  ">
      <Search />
      <Fcard />
      <ShowCato />
    </View>
  );
};

export default Home;
