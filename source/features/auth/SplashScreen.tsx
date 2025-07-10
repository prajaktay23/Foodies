import { StyleSheet, Text, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'
import React from 'react'
import { splashStyles } from '@unistyles/authStyles'

const SplashScreen = () => {

  const {styles} = useStyles(splashStyles);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})