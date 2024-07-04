import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SideBar from '../../components/sideNavigation/SideBar'
import { useNavigation } from '@react-navigation/native';

export default function ChangeOver () {
    const navigation = useNavigation();

  
    return (
        <View className="w-full h-full bg-gray-900 flex flex-row">
        
       <SideBar />

       <View>
       <View className="flex flex-row mt-5">
            <TouchableOpacity 
            className="py-3 px-8 border bg-gray-800 border-gray-700 rounded-md mx-3"
            onPress={() => navigation.navigate('ChangeoverA')}
            >
                <Text className="text-gray-300">ChangeOver A</Text>
            </TouchableOpacity>

            <TouchableOpacity
            className="py-3 px-8 border bg-gray-800 border-gray-700 rounded-md mx-3"
            onPress={() => navigation.navigate('ChangeoverB')}
            >
                <Text className="text-gray-300">ChangeOver B</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            className="py-3 px-14 border bg-gray-800 border-gray-700 rounded-md mx-3"
            onPress={() => navigation.navigate('ChangeoverAB')}
            >
                <Text className="text-gray-300">A + B</Text>
            </TouchableOpacity>
        </View>
       </View>

        
        
        </View>
    )
  
}
