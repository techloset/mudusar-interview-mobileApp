import React from 'react'
import { useIsFocused } from '@react-navigation/native'

import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import Slider from './Slider'
import Tap from '../components/taps/Tap'
import BackIcon1 from '../assets/svg/back-arrow-blue.svg'
import Icon1 from '../assets/svg/articleIcon1.svg'
import Icon2 from '../assets/svg/articleIcon2.svg'
import Icon3 from '../assets/svg/articleIcon3.svg'
import Icon4 from '../assets/svg/articleIcon4.svg'


const Articles = ({ navigation }: any) => {
    const isFocused = useIsFocused()

    return (
        <View style={styles.parent}>
            <View style={styles.header}>

                <Pressable style={styles.headerIcon} onPress={() => navigation.goBack()} >
                    <BackIcon1 />
                </Pressable>
                <View style={{
                    // flex: 1
                }}>
                    <Text style={styles.heading}>Articles</Text>
                </View>
            </View>
            <ScrollView >
                <View><Text style={styles.title}>The Article Page</Text></View>
                <View style={styles.iconsSection}>
                    <View style={styles.iconsSectionChild1}><Icon4 /><Text style={styles.iconTitle}>All</Text></View>
                    <View style={styles.iconsSectionChild1}><Icon2 /><Text style={styles.iconTitle2}>Main</Text></View>
                    <View style={styles.iconsSectionChild1}><Icon3 /><Text style={styles.iconTitle2}>Web</Text></View>
                    <View style={styles.iconsSectionChild1}><Icon1 /><Text style={styles.iconTitle2}>Other</Text></View>
                </View>
                <View style={styles.parent}>
                    <Slider />
                </View>
            </ScrollView>
            <View >
                {isFocused &&
                    <Tap active='article' />
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        // marginLeft: 20,
        flex: 1,
        // justifyContent: 'space-between',
        // marginBottom: '10%'
        backgroundColor: 'white'

    },
    header: {
        marginTop: 36,
        marginLeft: 18,
        gap: 11,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'

    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 33,
        color: '#013551',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',


    }
    , headerIcon: {
        // position: 'absolute',
        // left: 5,
        // marginBottom: 5
        alignItems: 'center',
    },
    headerHeading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4,
        marginTop: 40,
        fontFamily: 'Poppins-Medium',

    },
    title: {
        color: '#47515C',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 28,
        fontFamily: 'Poppins-Medium',

    },
    iconTitle: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: '#F17720',
        fontFamily: 'Poppins-Medium',

    },
    iconTitle2: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: '#013551',
        fontFamily: 'Poppins-Medium',

    },
    iconsSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 44,
        paddingVertical: 21,
        backgroundColor: "#FFF2EB"
    },
    iconsSectionChild1: {
        display: 'flex',
        alignItems: 'center'
    }

})
export default Articles