import React from 'react'
import {
    Alert, View, Text, StyleSheet, Image, ImageBackground,
    ScrollView, Pressable, Touchable, StatusBar, SafeAreaView
} from 'react-native'
import CustomButton from '../components/button/Button'
import Progress from '../components/progress/Progress'
import BackIcon1 from '../assets/svg/back-arrow-blue.svg'
import BackIcon2 from '../assets/svg/back-arrow-orange.svg'
import PlayButton from '../assets/svg/play-button.svg'
import Progress30 from '../assets/svg/progress30.svg'
import Progress40 from '../assets/svg/progress40.svg'
import Progress70 from '../assets/svg/progress70.svg'
import Progress100 from '../assets/svg/progress100.svg'
const Analytics = ({ navigation }: any) => {
    // const goBack = () => {
    //     // Alert.alert('log chla')
    //     navigation.navigate('HomeScreen')
    // }
    return (
        <>

            <StatusBar backgroundColor={'#FFF9F4'} />
            <SafeAreaView style={{
                flex: 1
            }}>

                <ScrollView >
                    <ImageBackground imageStyle={{ marginBottom: 80 }} source={require('../assets/images/analytics/bgImg.png')}>
                        <View style={styles.header}>
                            <Pressable style={styles.headerIcon} onPress={() => navigation.goBack()} >
                                <BackIcon1 />
                            </Pressable>
                            <View style={{
                                // flex: 1
                            }}>
                                <Text style={styles.heading}>Analytics</Text>
                            </View>
                            <View style={{ width: 30 }} />
                        </View>
                        <View style={styles.parent}>

                            <View><View style={styles.headerHeading}>
                                <BackIcon2 />
                                {/* <Image source={require('../assets/images/analytics/back-arrow-orange.png')}></Image> */}
                                <Text style={styles.topHeading}> Job interview</Text>
                            </View>
                                <Text style={styles.headerTitle}>01.  What are your weaknesses?</Text>
                                <Text style={styles.headerTitle2}>Video</Text>
                                <View style={{ borderRadius: 50, borderColor: 'red' }}>

                                    <ImageBackground imageStyle={{ borderRadius: 5 }} source={require('../assets/images/analytics/videoImg.png')}
                                        style={[styles.videoSection,]}>
                                        <View style={styles.videoSectionContent}>
                                            <PlayButton style={styles.vedioPlayButton} />
                                            <CustomButton title='Cancel' buttonStyle={styles.btn1}
                                                titleStyle={styles.btn1Title} ></CustomButton>
                                            <CustomButton title='NEXT' buttonStyle={styles.btn2}
                                                titleStyle={styles.btn2Title} ></CustomButton>
                                            <CustomButton title='Retry' buttonStyle={styles.btn3}
                                                titleStyle={styles.btn2Title} ></CustomButton>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                            {/* /////////////////////// progress seciton//////////////////////////// */}
                            <View>
                                <Text style={styles.result}>Result</Text>
                                <View style={styles.progressSec1}>
                                    <View style={styles.progressItems}>
                                        <Progress number={2} color={"#3BB13A"} source={require('../assets/images/analytics/p70.png')} />
                                    </View>
                                    <View style={styles.progressItems}>
                                        <Progress number={1} color={"#4449D5"} source={require('../assets/images/analytics/p40.png')} />
                                    </View>
                                    <View style={styles.progressItems}>
                                        <Progress number={4} color={"#F17720"} source={require('../assets/images/analytics/p100.png')} />
                                    </View>
                                    <View style={styles.progressItems}>
                                        <Progress number={3} color={"#DD52D7"} source={require('../assets/images/analytics/p30.png')} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.progressSec1}>
                                <View style={styles.progressItems}>
                                    <Progress number={3} color={"#DD52D7"} source={require('../assets/images/analytics/p30.png')} />
                                </View>
                                <View style={styles.progressItems}>
                                    <Progress number={4} color={"#F17720"} source={require('../assets/images/analytics/p100.png')} />
                                </View>
                                <View style={styles.progressItems}>
                                    <Progress number={1} color={"#4449D5"} source={require('../assets/images/analytics/p40.png')} />
                                </View>
                                <View style={styles.progressItems}>
                                    <Progress number={2} color={"#3BB13A"} source={require('../assets/images/analytics/p70.png')} />
                                </View>
                            </View>
                            <View style={styles.progressSec1}>
                                <View style={styles.progressItems}>
                                    <Progress number={1} color={"#4449D5"} source={require('../assets/images/analytics/p40.png')} />
                                </View>
                                <View style={styles.progressItems}>

                                    <Progress number={2} color={"#3BB13A"} source={require('../assets/images/analytics/p70.png')} />
                                </View>
                                <View style={styles.progressItems}>

                                    <Progress number={3} color={"#DD52D7"} source={require('../assets/images/analytics/p30.png')} />
                                </View>
                                <View style={styles.progressItems}>

                                    <Progress number={4} color={"#F17720"} source={require('../assets/images/analytics/p100.png')} />
                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={styles.summery}>Summery</Text>
                                <View style={styles.summeryBox}>
                                    <View style={styles.summerInnerBox}>
                                        <View style={styles.summeryDiv}></View>
                                        <Text style={styles.summeryText}>
                                            Composition with the other interviews Sub category</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    parent: {
        marginHorizontal: 13,
        flex: 1
        // backgroundColor: 'lightblue'

    },
    header: {
        paddingHorizontal: 18,
        paddingTop: 39,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'rgba(239, 228, 220, 0.7)'

    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 33,
        color: '#013551',
        textAlign: 'center'
        , fontFamily: 'Poppins-SemiBold'

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
        marginTop: 40
        , fontFamily: 'Poppins-Medium'

    },
    topHeading: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 27,
        color: '#F17720',
        marginLeft: 11
        , fontFamily: 'Poppins-SemiBold'

    },
    headerTitle: {
        color: "black",
        marginLeft: 5,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        marginTop: 4
        , fontFamily: 'Poppins-SemiBold'

    },
    headerTitle2: {
        color: "#2B2C46",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 27,
        marginTop: 22
        , fontFamily: 'Poppins-Medium'

    },
    videoSection: {
        height: 200,
        marginTop: 14,
        borderRadius: 10,
        width: '100%', overflow: 'hidden'

        // borderWidth: 4,
        // borderColor: 'red'
    },
    btn1: {
        paddingHorizontal: 24,
        paddingVertical: 7,
        backgroundColor: '#FBE0CA',
        borderRadius: 5
    },
    btn2: {
        paddingHorizontal: 30,
        paddingVertical: 7,
        backgroundColor: '#F17720',
        borderRadius: 5

    }, btn3: {
        paddingHorizontal: 30,
        paddingVertical: 7,
        backgroundColor: '#F4B733',
        borderRadius: 5

    },
    btn1Title: {
        color: "#F17720",
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 21,
        fontFamily: 'Poppins-Medium'

    },
    btn2Title: {
        color: "white",
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 21
        , fontFamily: 'Poppins-Medium'

    },
    videoSectionContent: {
        flex: 1,
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 15,
        gap: 12,
        paddingLeft: 10,
        width: '100%'
        // backgroundColor: 'red',

    },
    vedioPlayButton: {
        position: 'absolute',
        top: 82
    },
    result: {
        color: "#2B2C46",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 27,
        marginTop: 22,
        marginLeft: 3,
        fontFamily: 'Poppins-Medium'

    },
    progressSec1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 14,
        marginTop: 10,
        width: '100%'

    },
    progressItems: {
        width: '22%',

    },
    summery: {
        color: "#2B2C46",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 27,
        marginTop: 22,
        marginLeft: 3
        , fontFamily: 'Poppins-Medium'

    },
    summeryText: {
        color: "#2B2C46",
        fontSize: 17,
        fontWeight: "500",
        lineHeight: 25
        , fontFamily: 'Poppins-Medium',
        margin: 20,
        // paddingBottom: 20,
        // backgroundColor: 'red',
        height: 50


    },
    summeryBox: {
        backgroundColor: '#FDF7F2',
        margin: 3,
        borderRadius: 5,
        padding: 15,
        elevation: 5,

        // marginBottom: 90
    },
    summerInnerBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        // padding: 20,
        elevation: 1,
        shadowOpacity: 1.2,
        shadowOffset: { width: -20, height: -20 },
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'whitesmoke'
    },
    summeryDiv: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        // padding: 2,
        height: 5,
        marginTop: -10,
        elevation: 7,
        // shadowOffset: {
        //     width: -20,
        //     height: -20,
        // },
        shadowColor: 'black',
        shadowOpacity: 1,
        // margin: 10
    }
})
export default Analytics
///////////////////// box shadow //////////////////// code
// container: {
//     backgroundColor: 'pink',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 10,
//     shadowOffset: {
//       width: -20,
//       height: -20,
//     },
//     shadowColor: 'pink',
//     shadowOpacity: 1,
//   },