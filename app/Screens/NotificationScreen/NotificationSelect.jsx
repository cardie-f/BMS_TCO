import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectComponent from "./../../components/SelectComponent";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

export default function NotificationSelect() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View className="w-full py-3 bg-gray-800 mx-5 border border-gray-600 rounded-md">
      <View className="flex flex-row">
        <View className="w-1/4">
          <SelectComponent
            label="Options"
            data={data}
            placeholder="Categories"
            searchPlaceholder="Search..."
            onValueChange={handleValueChange}
          />
          {/* {selectedValue && (
            <Text style={styles.selected}>Selected: {selectedValue}</Text>
          )} */}
        </View>
        <View className="w-1/4">
          <SelectComponent
            label="Options"
            data={data}
            placeholder="Start Date"
            searchPlaceholder="Search..."
            onValueChange={handleValueChange}
          />
          {/* {selectedValue && (
            <Text style={styles.selected}>Selected: {selectedValue}</Text>
          )} */}
        </View>
        <View className="w-1/4">
          <SelectComponent
            label="Options"
            data={data}
            placeholder="End Date"
            searchPlaceholder="Search..."
            onValueChange={handleValueChange}
          />
          {/* {selectedValue && (
            <Text style={styles.selected}>Selected: {selectedValue}</Text>
          )} */}
        </View>
      </View>
    </View>
  );
}


