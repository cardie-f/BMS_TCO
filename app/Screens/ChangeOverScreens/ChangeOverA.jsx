import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ChangeOverNav from '../../components/ChangeOverNav'
import SideBar from '../../components/sideNavigation/SideBar'

export default class ChangeOverA extends Component {
  render() {
    return (
        <View className="w-full h-full bg-gray-900 flex flex-row">
        
        <SideBar />
        <View className="">
            <View>
               <ChangeOverNav />
            </View>
            
          <View>
           <Text className="text-white text-2xl mt-1">HELLO</Text>
          </View>
        </View>
        
        </View>
    )
  }
}
