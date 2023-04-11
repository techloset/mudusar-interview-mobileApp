import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

const Progress = (props: any) => {
    return (
        <View style={styles.parent}>
            <Image style={{ height: 84, width: 84 }} source={props.source}></Image>
            <Text style={[styles.text, { color: props.color }]}>Expression {props.number}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        height: 84,
        width: 84
    },
    text: {
        fontWeight: '500',
        fontSize: 10, lineHeight: 15
        , fontFamily: 'Poppins-Medium'


    }
})
export default Progress