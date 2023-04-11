import React from 'react'
import Icon1 from '../../assets/svg/tap-icon1.svg'
import Icon2 from '../../assets/svg/tap-icon2.svg'
import Icon3 from '../../assets/svg/tap-icon3.svg'
import Icon4 from '../../assets/svg/tap-icon4.svg'
import Plus from '../../assets/svg/plusIcon.svg'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BgImg from '../../assets/svg/tapBg.svg'
import Svg, { Image } from 'react-native-svg'
// declare const BgImg: any;
const Tap = () => {
    const navigation: any = useNavigation()
    return (
        <View>
            {/* <Svg> */}

            <BgImg width='100%' style={{ position: 'absolute', bottom: 0 }} />
            {/* <Image href={BgImg} /> */}
            {/* </Svg> */}

            <View style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', zIndex: 2 }}>

                <View style={[styles.circle, {
                    backgroundColor: '#FB7C00', borderRadius: 50, position: 'absolute', padding: 27, zIndex: 2, bottom: '45%',

                }]}>
                    {/* <Text style={{ fontSize: 60, color: 'white' }}>+</Text> */}
                    <Plus />
                </View>
                <View style={{ width: '100%', height: 77, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
                    <View style={{ paddingLeft: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon1 /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Articles')}><Icon2 /></TouchableOpacity>
                    </View>
                    <View style={{ paddingRight: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}><Icon3 /></TouchableOpacity>
                        <TouchableOpacity><Icon4 /></TouchableOpacity>
                    </View>
                </View>
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