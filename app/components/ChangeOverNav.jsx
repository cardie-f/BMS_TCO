import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChangeOverNav() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("ChangeoverA");

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName); 
    setActiveTab(screenName); // Set 
  };

  return (
    <View className="w-full h-full bg-gray-900 flex flex-row">
      <View>
        <View className="flex flex-row mt-5">
          <TouchableOpacity
            className="py-3 px-8 border bg-gray-800 border-gray-700 rounded-md mx-3"
            style={{ backgroundColor: activeTab === "ChangeoverA" ? "#4a5568" : "#2d3748",}}
            onPress={() => navigation.navigate("ChangeoverA")}
          >
            <Text className="text-gray-300">ChangeOver A</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 px-8 border bg-gray-800 border-gray-700 rounded-md mx-3"
            onPress={() => navigation.navigate("ChangeoverB")}
          >
            <Text className="text-gray-300">ChangeOver B</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 px-14 border bg-gray-800 border-gray-700 rounded-md mx-3"
            onPress={() => navigation.navigate("ChangeoverAB")}
          >
            <Text className="text-gray-300">A + B</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
