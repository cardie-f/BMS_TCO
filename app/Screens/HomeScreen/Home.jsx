import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SideBar from './../../components/sideNavigation/SideBar';

export default class Home extends Component {
  render() {
    return (
      <View className="w-full h-full bg-gray-900 flex flex-row">
        
      <SideBar />
      <View className="mt-20">
        <Text className="text-white text-2xl -mt-14">HELLO</Text>
      </View>
      
      </View>
    )
  }
}
