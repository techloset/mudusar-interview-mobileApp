import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'

const Cards = (props: any) => {
    return (
        <View>
            {/* <ImageBackground source={require('../../assets/images/sliderImg.png')}> */}
            <ImageBackground style={{
                height: 170, width: 100, marginHorizontal: 10, paddingLeft: 9
            }} source={props.source}>
                <Text style={[styles.font, { fontSize: 12, fontWeight: '600', lineHeight: 18, marginTop: 61 }]}>Interview {props.interview}</Text>
                <Text style={[styles.font, { fontSize: 9, fontWeight: '500', lineHeight: 12, marginTop: 7 }]}>Lorem Ipsum
                    Doller sit amet
                    Recommended</Text>
                <Text style={[styles.font, { fontSize: 16, fontWeight: '600', lineHeight: 24, textAlign: 'center', marginTop: 7 }]}>{props.minutes} min</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    font: {
        fontFamily: 'Poppins-Medium',

    }
})
export default Cards