import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
interface Props {
    color: string;
    source: any;
    minutes: any;
    interview: any
}
const Cards = (props: Props) => {
    const { color } = props
    return (
        <View>
            {/* <ImageBackground source={require('../../assets/images/sliderImg.png')}> */}
            <LinearGradient colors={[color, '#F2F3F8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.50, y: 1.2 }} style={[styles.main, {
                    position: 'relative',
                    height: 170, width: 100, marginHorizontal: 0, paddingLeft: 9, zIndex: 2, marginTop: 20, backgroundColor: props.color
                }]} >
                <View style={{ position: 'absolute', backgroundColor: 'rgba(242, 243, 248, 0.5)', padding: 15, borderRadius: 50, top: -30, left: -5, zIndex: 1, backfaceVisibility: 'visible', }} >
                    {props.source}
                </View>
                <Text style={[styles.font, { color: 'white', fontSize: 12, fontWeight: '600', lineHeight: 18, marginTop: 61 }]}>Interview {props.interview}</Text>
                <Text style={[styles.font, { color: 'white', fontSize: 9, fontWeight: '500', lineHeight: 12, marginTop: 7 }]}>Lorem Ipsum
                    Doller sit amet
                    Recommended</Text>
                <Text style={[styles.font, { color: 'white', fontSize: 16, fontWeight: '600', lineHeight: 24, textAlign: 'center', marginTop: 7 }]}>{props.minutes} min</Text>
            </LinearGradient>
        </View >
    )
}
const styles = StyleSheet.create({
    font: {
        fontFamily: 'Poppins-Medium',

    },
    main: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 50,
        // borderColor: 'black',
        // borderBottomColor: 'red',
        // borderWidth: 
    }
})
export default Cards