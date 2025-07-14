import { Colors } from "@unistyles/Constants";
import { FC, memo } from "react";
import { Image, TextStyle, ViewStyle, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import Delivery from '@assets/tabicons/delivery.png';
import Dinning from '@assets/tabicons/dining.png';
import Reorder from '@assets/tabicons/reorder.png';
import Live from '@assets/tabicons/live.png';
import CustomText from "@components/global/CustomText";

import DeliveryFocused from '@assets/tabicons/delivery_focused.png';
import DiningFocused from '@assets/tabicons/dining_focused.png';
import ReorderFocused from '@assets/tabicons/reorder_focused.png';
import LiveFocused from '@assets/tabicons/live_focused.png';
import { useAppSelector } from "@state/reduxHook";
// import { useAppSelector } from "@state/reduxHook";



interface TabProps {
    name: string;
}

interface IconProps {
    focused: boolean;
}

const styles = {
    width: RFValue(18),
    height: RFValue(18),
}

const tabStyles: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}
const textStyleInactive: TextStyle = {
    textAlign: 'center',
    marginTop: 4,
    fontSize: RFValue(9.5),
    color: Colors.lightText,
}

const textStyleActive: TextStyle = {
    textAlign: 'center',
    marginTop: 4,
    fontSize: RFValue(9.5),
    color: Colors.active,
}

const TabIconFocused: FC<TabProps> = memo(({ name }) => {

    const isVegMode = useAppSelector(state => state.user.isVegMode);

    return (
        <View style={tabStyles}>
            <Image
                source={name === 'Delivery' ? DeliveryFocused :
                    name === 'Dining' ? DiningFocused :
                        name === 'Reorder' ? ReorderFocused : LiveFocused
                }
                style={[
                    styles,
                    {
                        tintColor: name === 'Live' ?
                            undefined : isVegMode ?
                                Colors.active : Colors.primary,
                    },]
                }
            />
            <CustomText style={textStyleActive}>{name}</CustomText>
        </View>
    )
})

const TabIcon: FC<TabProps> = memo(({ name }) => {
    return (
        <View style={tabStyles}>
            <Image
                source={
                    name === 'Delivery' ? Delivery :
                        name === 'Dining' ? Dinning :
                            name === 'Reorder' ? Reorder : Live
                }
                style={styles}
            />
            <CustomText style={textStyleInactive}>{name}</CustomText>
        </View>
    )
})

export const DeliveryTabIcon: FC<IconProps> = ({ focused }) => {
    return focused ? <TabIconFocused name="Delivery" /> : <TabIcon name="Delivery" />;
}

export const ReorderTabIcon: FC<IconProps> = ({ focused }) => {
    return focused ? <TabIconFocused name="Reorder" /> : <TabIcon name="Reorder" />;
}

export const DiningTabIcon: FC<IconProps> = ({ focused }) => {
    return focused ? <TabIconFocused name="Dining" /> : <TabIcon name="Dining" />;
}

export const LiveTabIcon: FC<IconProps> = ({ focused }) => {
    return focused ? <TabIconFocused name="Live" /> : <TabIcon name="Live" />;
}