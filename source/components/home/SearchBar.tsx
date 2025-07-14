import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React from 'react'
import { useSharedState } from '@features/tab/SharedContext';
import { useStyles } from 'react-native-unistyles';
import { homeStyles } from '@unistyles/homeStyles';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import RollingContent from 'react-native-rolling-bar';
import CustomText from '@components/global/CustomText';
import { useAppSelector } from '@state/reduxHook';
import { setVegMode } from '@state/reducers/userSlice';
import { useDispatch } from 'react-redux';

const searchItems: string[] = [
  'Search "char samosa"',
  'Search "cake"',
  'Search "ice cream"',
  'Search "pizza"',
  'Search "burger"',
  'Search "Biryani"',
]
const SearchBar = () => {
  const dispatch = useDispatch();
  const { scrollYGlobal } = useSharedState();
  const { styles } = useStyles(homeStyles);
  const isVegMode = useAppSelector(state => state.user.isVegMode);

  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0])
    return {
      color: `rgb(${textColor}, ${textColor}, ${textColor})`
    }
  })

  return (
    <>
      {/* <SafeAreaView /> */}
      <View style={[styles.flexRowBetween, styles.padding]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.searchInputContainer}>
          <Icon
            name="search"
            iconFamily='Ionicons'
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          />

          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}>
            {searchItems?.map((item, index) => {
              return (
                <CustomText
                  fontSize={12}
                  fontFamily='Okra-Medium'
                  key={index}
                  style={styles.rollingText}
                >
                  {item}

                </CustomText>
              )
            })}
          </RollingContent>

          <Icon
            name="mic-outline"
            iconFamily='Ionicons'
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          />
        </TouchableOpacity>

        <Pressable
          style={styles.vegMode}
          onPress={() =>
            dispatch(setVegMode(!isVegMode))
          }>
          <Animated.Text style={[textColorAnimation, styles.animatedText]}>
            VEG
          </Animated.Text>
          <Animated.Text style={[textColorAnimation, styles.animatedSubText]}>
            MODE
          </Animated.Text>

          <Image
            source={isVegMode ? require('@assets/icons/switch_on.png') : require('@assets/icons/switch_off.png')}
            style={styles.switch}
          />
        </Pressable>
      </View>
    </>
  )
}

export default SearchBar