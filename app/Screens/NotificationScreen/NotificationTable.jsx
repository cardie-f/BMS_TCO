import React, { Component } from "react";
import { Text, View } from "react-native";

export default function NotificationTable() {
  return (
    <View className="w-full mt-3 mx-5">
      <View>

        <View className="flex flex-row w-full items-center justify-between mt-10">
          <View className="w-1/12 py-2 border border-gray-700">
            <Text className="text-gray-400 pl-2">Priority</Text>
          </View>
          <View className="w-2/3 border border-gray-700 py-2">
            <Text className="text-gray-400 pl-2">Name</Text>
          </View>
          <View className="w-1/6 py-2 border border-gray-700">
            <Text className="text-gray-400 pl-2">Date & Time</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
