import React from 'react'
import { useIsFocused } from '@react-navigation/native'
// import Icon1 from '../../assets/svg/tap-icon1.svg'
// import Icon2 from '../../assets/svg/tap-icon2.svg'
// import Icon3 from '../../assets/svg/tap-icon3.svg'
// import Icon4 from '../../assets/svg/tap-icon4.svg'
import Icon1 from '../../assets/svg/Icon1'
import Icon2 from '../../assets/svg/Icon2'
import Icon3 from '../../assets/svg/Icon3'
import Icon4 from '../../assets/svg/Icon4'
import Plus from '../../assets/svg/plusIcon.svg'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BgImg from '../../assets/svg/tapBg-cropped.svg'
import Svg, { Image } from 'react-native-svg'
// declare const BgImg: any;
const Tap = ({ active }: any) => {
    // const isFocused = useIsFocused()
    // console.log(text, 'jfljdslkfjld');

    const navigation: any = useNavigation()
    // const displayText = text || defaultText;
    return (
        <View>

            {/* <BgImg width='100%' height='100%' style={{ position: 'absolute', bottom: 0 }} /> */}


            <View style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                <View style={[styles.circle, {
                    backgroundColor: '#FB7C00', borderRadius: 50, position: 'absolute', padding: 21, zIndex: 2, bottom: '45%',
                }]}>
                    <Plus />
                </View>
                <ImageBackground source={require('../../assets/images/bottom-tap-bg.png')} style={{ width: '100%', height: 77, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View style={{ paddingLeft: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon1 color={active == 'dashboard' ? '#FB7C00' : '#FDB56F'} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Articles')}><Icon2 color={active == 'article' ? '#FB7C00' : '#FDB56F'} /></TouchableOpacity>
                    </View>
                    <View style={{ paddingRight: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}><Icon3 color={active == 'Analytics' ? '#FB7C00' : '#FDB56F'} /></TouchableOpacity>
                        <TouchableOpacity><Icon4 color={active == 'any' ? '#FB7C00' : '#FDB56F'} /></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    circle: {


        // borderColor: '#F2F3F8',
        // borderWidth: 10,
        // borderRadius: 50
    },
    svgImg: {
        position: 'absolute', top: -40,
        // width: 600,
        zIndex: -1

    }
})
export default Tap