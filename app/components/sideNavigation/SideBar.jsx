import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SideBar () {
   const navigation = useNavigation();
  
    return (
      <View className="w-1/4 md:w-1/6 h-full bg-gray-800 border border-r-2 border-gray-700 justify-center">
        <View className="items-center">
           <TouchableOpacity className="p-6 border border-gray-700 rounded-full mb-3"
            onPress={() => navigation.navigate('Home')}
           >
              <Entypo name="home" size={30} color="white" />
           </TouchableOpacity>
           <TouchableOpacity className="p-6 border border-gray-700 rounded-full mb-3"
           onPress={() => navigation.navigate('ChangeoverA')}
           >
              <Ionicons name="settings" size={30} color="white" />
           </TouchableOpacity>
           <TouchableOpacity className="p-6 border border-gray-700 rounded-full mb-3"
           onPress={() => navigation.navigate('DigitalInput')}
           >
              <Ionicons name="settings" size={30} color="white" />
           </TouchableOpacity>
           <TouchableOpacity className="p-6 border border-gray-700 rounded-full mb-3"
           onPress={() => navigation.navigate('Notification')}
           >
              <Ionicons name="notifications" size={30} color="white" />
           </TouchableOpacity>
        </View>
        
      </View>
    )
  
}
