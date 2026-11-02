import { View } from 'react-native'
import React from 'react'
import { theme1 } from '../theme';

const Line = () => {
    return <View
        style={{
            borderBottomWidth: 1,
            borderColor: theme1.lightBrown,
            marginVertical: 25,
        }}
    ></View>
};

export default Line;