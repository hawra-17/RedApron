import { View, Text } from "react-native";
import React from "react";
import Burger from "../assets/burger.png";
import CrispyChicken from "../assets/crispyChicken.png";
import Pizzaslice from "../assets/pizzaslice.png";
import CatogoryCard from "./CatogoryCard";

const ShowCato = () => {
  return (
    <View className="flex-row justify-between gap-x-2">
      <CatogoryCard image={Burger} text="Burger" />
      <CatogoryCard image={Pizzaslice} text="Pizza" />
      <CatogoryCard image={CrispyChicken} text="Crispy chicken" />
    </View>
  );
};

export default ShowCato;
