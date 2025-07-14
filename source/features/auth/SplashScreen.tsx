import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useStyles } from 'react-native-unistyles'
import React, { useEffect } from 'react'
import { splashStyles } from '@unistyles/authStyles'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen = () => {

  const {styles} = useStyles(splashStyles);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next screen after 2 seconds
      // For example, you can use 
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar
       hidden={Platform.OS !== 'android'}
      />
      <Image 
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View style={styles.animatedContainer}
      entering={FadeInDown.delay(400).duration(800)}>
        <Image 
          source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />

        <CustomText 
          variant='h5'
          fontFamily='Okra-Medium'
          style={styles.msgText}
          color='#fff'
        >
          From Kitchen to doorstep, we bring the World to your Plate. 
          </CustomText>
      </Animated.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})