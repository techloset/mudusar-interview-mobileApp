import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView, StatusBar, ImageBackground } from 'react-native'
import CustomButton from '../components/button/Button'
import HomeLogo from '../assets/svg/homeLogo.svg'
import StartScreenImg from '../assets/svg/start-screen-img.svg'
const HomeScreen = ({ navigation }: any) => {
    return (
        <>
            <ScrollView >
                <View style={[styles.main, { flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F2F3F8' }]}>
                    <StatusBar backgroundColor={'#F2F3F8'} barStyle='dark-content' />
                    <View style={{ marginTop: 27 }}><HomeLogo /></View>

                    <View style={{ marginTop: 147 }}><StartScreenImg /></View>
                    <ImageBackground imageStyle={{ opacity: 0.6 }} source={require('../assets/images/homeBgImg.png')}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 61, marginTop: 113 }}>
                            <Text style={[styles.font, { color: '#3B4A58', fontSize: 13, lineHeight: 21, fontWeight: '500', marginBottom: 21, }]}>Lorem Ipsum is simply dummy text of the printing
                                and  typesetting industry.  Lorem Ipsum has been
                                the industry's standard dummy text ever since</Text>
                            <CustomButton buttonStyle={styles.button} titleStyle={styles.title} color={'#F17720'} title='GET STARTED' onPress={() => { navigation.navigate('Dashboard') }}></CustomButton>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView >
        </>
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
        // width: '10%'
        paddingHorizontal: '6%',
        // backgroundColor='#F2F3F8'
        // height: '84%'
    },
    main: { backgroundColor: 'red' }
});

export default HomeScreen