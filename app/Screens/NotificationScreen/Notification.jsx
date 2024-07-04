import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SideBar from '../../components/sideNavigation/SideBar'
import NotificationSelect from './NotificationSelect'
import NotificationTable from './NotificationTable'

export default class Notification extends Component {
  render() {
    return (
      <View className="w-full h-full bg-gray-900 flex flex-row">
        
           <SideBar />
        

        <View className="mt-10 w-3/4">
          <View className="items-center mt-10 mb-5">
            <Text className="text-gray-300 text-3xl font-bold">Alarms and Events</Text>
          </View>
          <NotificationSelect />

          <NotificationTable />
        </View>

       

      </View>
    )
  }
}
