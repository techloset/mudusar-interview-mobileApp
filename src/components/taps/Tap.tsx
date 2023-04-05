import React from 'react'
import Icon1 from '../../assets/svg/tap-icon1.svg'
import Icon2 from '../../assets/svg/tap-icon2.svg'
import Icon3 from '../../assets/svg/tap-icon3.svg'
import Icon4 from '../../assets/svg/tap-icon4.svg'
import Plus from '../../assets/svg/plusIcon.svg'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Tap = () => {
    const navigation: any = useNavigation()
    return (
        <View style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#FB7C00', borderRadius: 50, position: 'absolute', padding: 27, zIndex: 2, bottom: '45%' }}>
                {/* <Text style={{ fontSize: 60, color: 'white' }}>+</Text> */}
                <Plus />
            </View>
            <ImageBackground style={{ width: '100%', height: 77, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }} source={require('../../assets/images/bottom-tap-bg.png')}>
                <View style={{ paddingLeft: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon1 /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Articles')}><Icon2 /></TouchableOpacity>
                </View>
                <View style={{ paddingRight: 28, display: 'flex', gap: 47, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Analytics')}><Icon3 /></TouchableOpacity>
                    <TouchableOpacity><Icon4 /></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default Tap