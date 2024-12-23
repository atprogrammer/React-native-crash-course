import { Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { Redirect,router } from 'expo-router'
import { SafeAreaView } from'react-native-safe-area-context';
import {StatusBar} from  'expo-status-bar';


import {images} from  '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
         <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
         <Image source={images.cards} className="w-[380px] h-[300px]" resizeMode="contain" />
         <View className="relative mt-5" >
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless 
              Possibilities with {' '}
              <Text className=" text-secondary-200">
              Aora
            </Text>
            </Text>
          
         </View>
         <Text className="text-sm font-pregula text-gray-100 mt-7 text-center">Where creativity meets innovation:
          emback on a journey of limitlees exploration with Aora
         </Text>
         <CustomButton 
         title="เข้าสู่ระบบด้วย Email" 
         handlePress={() => {
          router.push('/sign-in')
         }} 
         containerStyles="w-full mt-7"
         />
      </View>
    </ScrollView>
    <StatusBar backgroundColor='#161622'
    style='light'
    />
   </SafeAreaView>
  )
}

