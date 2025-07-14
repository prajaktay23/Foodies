import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '@features/auth/SplashScreen'
import LoginScreen from '@features/auth/LoginScreen'
import { navigationRef } from '@utils/NavigationUtils'
import AnimatedTab from '@features/tab/AnimatedTab'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
   <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} /> 
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{animation:'fade'}}/>
        <Stack.Screen name="UserBottomTab" component={AnimatedTab} options={{animation:'fade'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})