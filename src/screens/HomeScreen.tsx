import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import CustomButton from '../components/button/Button'
import HomeLogo from '../assets/svg/homeLogo.svg'
import StartScreenImg from '../assets/svg/start-screen-img.svg'
const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ marginTop: 47 }}><HomeLogo /></View>
            <View style={{}}><StartScreenImg /></View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 61 }}>
                <Text style={[styles.font, { color: '#3B4A58', fontSize: 14, lineHeight: 21, fontWeight: '500', marginHorizontal: 13, marginBottom: 21 }]}>Lorem Ipsum is simply dummy text of the printing
                    and  typesetting industry.  Lorem Ipsum has been
                    the industry's standard dummy text ever since</Text>
                <CustomButton buttonStyle={styles.button} titleStyle={styles.title} color={'#F17720'} title='GET STARTED' onPress={() => { navigation.navigate('Dashboard') }}></CustomButton>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F17720',
        paddingVertical: 13,
        paddingHorizontal: 60,
        borderRadius: 5,

    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 21,
        fontFamily: 'Poppins-Medium',

    },
    font: {
        fontFamily: 'Poppins-Medium',

    }
});

export default HomeScreen