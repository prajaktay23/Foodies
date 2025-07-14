import { View, Text, Pressable, TextInput } from 'react-native'
import React, { FC, use } from 'react'
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';

interface PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}   

const PhoneInput:FC<PhoneInputProps> = ({value, onChangeText, onBlur, onFocus}) => {

  const {styles} = useStyles(phoneStyles);

  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer} onPress={onFocus}>
        <CustomText style={{fontFamily: 'Okra-Medium'}} variant='h2'>🇮🇳</CustomText>
        <Icon
          name='caret-down-sharp'
          size={18}
          color={Colors.lightText}
          iconFamily='Ionicons'
        />
      </Pressable>
      
      <View style={styles.phoneInputContainer}>
        <CustomText style={{fontFamily: 'Okra-Bold'}}>+91</CustomText>
        <TextInput
          placeholder='Enter your phone number'
          style={styles.input}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          keyboardType='phone-pad'
          maxLength={10}
        />
        </View>
    </View>
  )
}

export default PhoneInput