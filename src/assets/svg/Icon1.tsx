import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
const Icon1 = ({ color }: any) => {
    return (
        <View>
            {/* <Text> */}
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="red">
                <Path d="M0.25 11.0833H8.91667V0.25H0.25V11.0833ZM0.25 19.75H8.91667V13.25H0.25V19.75ZM11.0833 19.75H19.75V8.91667H11.0833V19.75ZM11.0833 0.25V6.75H19.75V0.25H11.0833Z" fill={color} />
            </Svg>

            {/* </Text> */}
        </View>
    )
}

export default Icon1

const styles = StyleSheet.create({})