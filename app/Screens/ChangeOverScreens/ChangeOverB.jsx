import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SideBar from '../../components/sideNavigation/SideBar'
import ChangeOverNav from './../../components/ChangeOverNav';

export default class ChangeOverB extends Component {
  render() {
    return (
        <View className="w-full h-full bg-gray-900 flex flex-row">
        
        
        <SideBar />
        <View className="">
            <View>
                <ChangeOverNav />
            </View>
          <Text className="text-white text-2xl -mt-14">HELLOwwww</Text>
        </View>
        
        </View>
    )
  }
}
