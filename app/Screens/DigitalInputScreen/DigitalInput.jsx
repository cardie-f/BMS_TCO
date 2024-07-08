import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SideBar from '../../components/sideNavigation/SideBar'

export default function DigitalInput () {
  
    return (
      <View className="w-full h-full bg-gray-900 flex flex-row">
      <SideBar />

      <View className=" w-3/4">
         <View className="items-center mb-5 mt-3">
            <Text className="text-gray-300 text-3xl font-bold">Digital Inputs</Text>
          </View>
      </View>
        
      </View>
    )
  
}
