import React, { useEffect, useMemo } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, ImageBackground, StatusBar } from 'react-native'
import ForwardIcon from '../assets/svg/forwardArrow.svg'
import Tap from '../components/taps/Tap'
import CustomButton from '../components/button/Button'
import Cards from '../components/flatCards/Cards'
import InterviewImg1 from '../assets/svg/interviewImg1.svg'
import InterviewImg2 from '../assets/svg/interviewImg2.svg'
import InterviewImg3 from '../assets/svg/interviewImg3.svg'
import InterviewImg4 from '../assets/svg/interviewImg4.svg'
import LinearGradient from 'react-native-linear-gradient'
// import { Image } from 'react-native-svg'
const Dashboard = () => {
    // useEffect(() => {
    //     isFocused ?
    //         <Tap text={'ali'} /> : <Tap text={'mudusar'} />
    // }, [])
    const isFocused = useIsFocused()
    console.log(isFocused)
    // const text = useMemo(() => isFocused ? 'ali' : 'mudusar', [isFocused]);
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: <Cards interview={'1'} minutes={'5'} source={<InterviewImg1 />} color={'#F4873A'} />,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: <Cards interview={'2'} minutes={'10'} source={<InterviewImg2 />} color={'#5160EF'} />,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: <Cards interview={'3'} minutes={'7'} source={<InterviewImg3 />} color={'#56BE86'} />,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d71',
            title: <Cards interview={'4'} minutes={'7'} source={<InterviewImg4 />} color={'#ED9AE5'} />,
        },
    ];

    const Item = ({ title }: any) => (
        <View style={{ marginRight: 20 }}>
            <View>{title}</View>
        </View>
    );
    const newData: any = [
        { id: '1', title: '1' },
        { id: '2', title: '1' },
        { id: '3', title: '1' },
        { id: '4', title: '1' },
    ];

    const newItem = ({ title }: any) => (
        // <View >
        <View style={{ height: 50, width: 100, borderRadius: 5, backgroundColor: 'white', marginRight: 15 }}>
            {/* <Text>{title}</Text> */}
        </View>
        // </View>
    );
    return (

        <View style={styles.parent}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <Text style={styles.heading}>Dashboard</Text>
                <Text style={styles.heading2}>30 C</Text>
            </View>
            <ScrollView style={styles.child1}>
                <LinearGradient colors={['#F5F1F0', '#F2F3F8', '#F2F3F8']}>
                    <View style={styles.header1}>
                        <Text style={styles.interviewHeading}>Last Interview</Text>
                        <Text style={styles.interviewDetial}>Details <ForwardIcon /></Text>
                    </View>
                    <View style={styles.interviewSection}>
                        <Image style={{ position: 'absolute', right: 0, top: '-5%', }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', right: 156, top: 26, height: 66, width: 66 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', left: 14, top: 20, height: 90, width: 95 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', left: 7, top: 132, height: 69, width: 71 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', left: 71, bottom: 9, height: 51, width: 54 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', right: 24, bottom: 0, height: 90, width: 95 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', right: 16, bottom: 91, height: 47, width: 50 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Image style={{ position: 'absolute', right: 156, bottom: 70, height: 51, width: 54 }} source={require('../assets/images/orange-color.png')}></Image>
                        <Text style={styles.interviewTitle}>Try Your First Interview {"\n"}
                            for free</Text>
                        <CustomButton title='START' buttonStyle={styles.button} titleStyle={styles.title} />
                    </View>
                    <ImageBackground imageStyle={{ zIndex: 1, opacity: 0.2 }} source={require('../assets/images/bgImg1.png')}>

                        <View>
                            <View style={styles.header2}>
                                <Text style={styles.interviewHeading}>Interviews</Text>
                                <Text style={styles.interviewDetial1}>More <ForwardIcon /></Text>
                            </View>

                            <FlatList
                                style={{ marginLeft: 20, }}
                                data={DATA}
                                renderItem={({ item }) => <Item title={item.title} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View>
                            <View style={styles.header2}>
                                <Text style={styles.interviewHeading}>Interview by Category</Text>
                                <Text style={styles.interviewDetial1}>More <ForwardIcon /></Text>
                            </View>

                            <FlatList
                                style={{ marginLeft: 20, marginBottom: '20%' }}
                                data={newData}
                                renderItem={({ item }) => newItem({ title: item.title })}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}

                            />
                        </View>
                    </ImageBackground>
                </LinearGradient>
            </ScrollView>
            <ImageBackground imageStyle={{ opacity: 0.2 }} source={require('../assets/images/bgImg1.png')}>

                <View >
                    {isFocused &&
                        <Tap active='dashboard' />
                    }
                    {/* {!isFocused ?
                        <Tap text={'ali'} /> : <Tap text={'mudusar'} />
                    } */}
                    {/* <Tap text={isFocused == true ? 'ali' : 'mudusar'} /> */}
                </View>
            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F5F1F0'
        // alignItems: 'center'
    },
    child1: {
        // marginLeft: 19
        zIndex: 0,
        // position: 'relative'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 60,
        // marginBottom: 13
        // backgroundColor: '#F5F1F2'
    },
    header1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 26,
        // marginBottom: 13
    },
    header2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 13
    },
    heading: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        fontWeight: "500",
        lineHeight: 33,
        color: '#888384',
        fontStyle: 'normal'
    },
    heading2: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        color: '#F17720',
        fontFamily: 'Poppins-Medium',
        fontStyle: 'normal'


    },
    interviewHeading: {
        fontFamily: 'Poppins-Medium',

        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: '#2B2C46'
    },
    interviewDetial: {
        fontFamily: 'Poppins-Regular',

        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        color: '#666775',
        marginRight: 10
    },
    interviewDetial1: {
        fontFamily: 'Poppins-Regular',

        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        color: '#666775',
        marginRight: 20
    },
    button: {
        backgroundColor: '#F17720',
        paddingVertical: 13,
        paddingHorizontal: 49,
        borderRadius: 3,
        marginTop: 29,
        marginBottom: 59
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',

        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 21
    },
    interviewSection: {
        backgroundColor: "white",
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 18,
        position: 'relative',
        borderRadius: 5
    },
    interviewTitle: {
        fontFamily: 'Poppins-Medium',

        color: '#4A4E57',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 76
    },
    tap: {
        position: 'absolute',
        bottom: 0
    }
})
export default Dashboard