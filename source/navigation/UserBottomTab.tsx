import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DinningScreen from '@features/dinning/DinningScreen';
import DeliveryScreen from '@features/delivery/DeliveryScreen';
import LiveScreen from '@features/live/LiveScreen';
import React from 'react';
import ReorderScreen from '@features/reorder/ReorderScreen';
import CustomTabBar from '@features/tab/CustomTabBar';

const UserBottomTab: React.FC = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
            initialRouteName='Delivery'
        >
            <Tab.Screen name="Delivery" component={DeliveryScreen} />
            <Tab.Screen name="Dining" component={DinningScreen} />
            <Tab.Screen name="Reorder" component={ReorderScreen} />
            <Tab.Screen name="Live" component={LiveScreen} />
        </Tab.Navigator>
    )
}

export default UserBottomTab

const styles = StyleSheet.create({})