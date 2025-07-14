import { ActivityIndicator, Animated, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, use, useEffect, useRef, useState } from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles } from '@unistyles/authStyles'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View'
import CustomText from '@components/global/CustomText'
import BreakerText from '@components/ui/BreakerText'
import PhoneInput from '@components/ui/PhoneInput'
import { resetAndNavigate } from '@utils/NavigationUtils'
import SocialLogin from '@components/ui/SocialLogin'
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight'

const LoginScreen: FC = () => {

    const animatedValue = useRef(new Animated.Value(0)).current;
    const keyboardOffsetHeight = useKeyboardOffsetHeight();
    const { styles } = useStyles(loginStyles);
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (keyboardOffsetHeight == 0){
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }else{
            Animated.timing(animatedValue, {
                toValue: -keyboardOffsetHeight * 0.25,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }, [keyboardOffsetHeight])


    const handleLogin = () => {
        setLoading(true);
        // Simulate a login process
        setTimeout(() => {
            setLoading(false);
            console.log('Login successful with phone:', phone);
            resetAndNavigate('UserBottomTab');
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={Platform.OS !== 'android'} />
            <Image
                source={require('@assets/images/login.png')}
                style={styles.cover}
            />

            <Animated.ScrollView
                bounces={false}
                style={{transform: [{ translateY: animatedValue }]}}
                keyboardShouldPersistTaps={'handled'}
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={styles.bottomContainer}>
                <CustomText fontFamily='Okra-Bold' variant='h2' style={styles.title}>
                    India's #1 Food Delivery and Dining App
                </CustomText>
                <BreakerText text='Log in or sign up' />

                <PhoneInput
                    value={phone}
                    onChangeText={setPhone}
                    onFocus={() => console.log('Focused')}
                    onBlur={() => console.log('Blurred')}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => { handleLogin() }}
                    disabled={loading}
                    activeOpacity={0.8}
                >{loading ?
                    (<ActivityIndicator size='small' color='#fff' />) :
                    (<CustomText variant='h5' color='#fff' fontFamily='Okra-Medium'>
                        Continue
                    </CustomText>)}
                </TouchableOpacity>

                <BreakerText text='or' />

                <SocialLogin />

            </Animated.ScrollView>
            <View style={styles.footer}>
                <CustomText>
                    By continuing you agree to our
                </CustomText>
                <View style={styles.footerTextContainer}>
                    <CustomText style={styles.footerText}>
                        Terms of Service
                    </CustomText>
                    <CustomText style={styles.footerText}>
                        Privacy Policy
                    </CustomText>
                    <CustomText style={styles.footerText}>
                        Content Policy
                    </CustomText>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})