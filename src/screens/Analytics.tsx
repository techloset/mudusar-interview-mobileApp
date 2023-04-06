import React from 'react'
import {
    Alert, View, Text, StyleSheet, Image, ImageBackground,
    ScrollView, Pressable, Touchable
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
        <ScrollView style={styles.parent}>
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
            <View><View style={styles.headerHeading}>
                <BackIcon2 />
                {/* <Image source={require('../assets/images/analytics/back-arrow-orange.png')}></Image> */}
                <Text style={styles.topHeading}> Job interview</Text>
            </View>
                <Text style={styles.headerTitle}>01.  What are your weaknesses?</Text>
                <Text style={styles.headerTitle2}>Video</Text>
                <ImageBackground source={require('../assets/images/analytics/videoImg.png')}
                    style={styles.videoSection}>
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
            {/* /////////////////////// progress seciton//////////////////////////// */}
            <View>
                <Text style={styles.result}>Result</Text>
                <View style={styles.progressSec1}>
                    <View style={styles.progressItems}>
                        <Progress number={2} color={"#3BB13A"} svg={<Progress70 />} />
                    </View>
                    <View style={styles.progressItems}>
                        <Progress number={1} color={"#4449D5"} svg={<Progress40 />} />
                    </View>
                    <View style={styles.progressItems}>
                        <Progress number={4} color={"#F17720"} svg={<Progress100 />} />
                    </View>
                    <View style={styles.progressItems}>
                        <Progress number={3} color={"#DD52D7"} svg={<Progress30 />} />
                    </View>
                </View>
            </View>
            <View style={styles.progressSec1}>
                <View style={styles.progressItems}>
                    <Progress number={3} color={"#DD52D7"} svg={<Progress30 />} />
                </View>
                <View style={styles.progressItems}>
                    <Progress number={4} color={"#F17720"} svg={<Progress100 />} />
                </View>
                <View style={styles.progressItems}>
                    <Progress number={1} color={"#4449D5"} svg={<Progress40 />} />
                </View>
                <View style={styles.progressItems}>
                    <Progress number={2} color={"#3BB13A"} svg={<Progress70 />} />
                </View>
            </View>
            <View style={styles.progressSec1}>
                <View style={styles.progressItems}>
                    <Progress number={1} color={"#4449D5"} svg={<Progress40 />} />
                </View>
                <View style={styles.progressItems}>

                    <Progress number={2} color={"#3BB13A"} svg={<Progress70 />} />
                </View>
                <View style={styles.progressItems}>

                    <Progress number={3} color={"#DD52D7"} svg={<Progress30 />} />
                </View>
                <View style={styles.progressItems}>

                    <Progress number={4} color={"#F17720"} svg={<Progress100 />} />
                </View>
            </View>
            <View>
                <Text style={styles.summery}>Summery</Text>
                <View style={styles.summeryBox}>
                    <View style={styles.summerInnerBox}>
                        <Text style={styles.summeryText}>
                            Composition with the other interviews Sub category</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    parent: {
        marginHorizontal: 13,
        flex: 1
        // backgroundColor: 'lightblue'

    },
    header: {
        marginTop: 39,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 33,
        color: '#013551',
        textAlign: 'center'
        , fontFamily: 'Poppins-Medium'

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
        , fontFamily: 'Poppins-Medium'

    },
    headerTitle: {
        color: "black",
        marginLeft: 5,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        marginTop: 4
        , fontFamily: 'Poppins-Medium'

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
        marginTop: 14
    },
    btn1: {
        paddingHorizontal: 23,
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
        // color: "#F17720",
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 21
        , fontFamily: 'Poppins-Medium'

    },
    videoSectionContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 15,
        gap: 12
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
        width: '22%'
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
        , fontFamily: 'Poppins-Medium'

    },
    summeryBox: {
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#FDF7F2',
        marginTop: 10
    },
    summerInnerBox: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5
    }
})
export default Analytics