import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination, } from 'react-native-snap-carousel';
import CarouselProps from 'react-native-snap-carousel';
// interface MyCarouselProps extends CarouselProps {
//     itemMarginHorizontal?: number;
// }
const Slider = () => {
    const crouselRef: any = useRef(null)
    const handleDotPress = (index: any) => {
        setActiveIndex(index)
        crouselRef.current.SnapToItem(index)
    };
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const carouselItems: any = [
        {
            title: 'How To work ?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been  the industrys standard dummy ',
        },
        {
            title: 'How To work ?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been  the industrys standard dummy ',
        },
        {
            title: 'How To work ?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been  the industrys standard dummy ',
        },
        {
            title: 'How To work ?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been  the industrys standard dummy ',
        },
        {
            title: 'How To work ?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting   industry. Lorem Ipsum has been  the industrys standard dummy ',
        },
    ];
    const renderItem = ({ item, index }: any) => {
        console.log(index, 'item ka index');

        return (
            <ImageBackground style={[styles.item, { height: 450 }]} source={require('../assets/images/sliderImg.png')}>
                <View
                    style={{
                        // backgroundColor: 'floralwhite',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: 5,
                        height: 450,
                        // padding: 50,
                        marginTop: 20,

                    }}>

                    <Text style={[styles.font, { lineHeight: 24, fontSize: 16, color: '#013551', fontWeight: '600', marginLeft: 21 }]}>{item.title}</Text>
                    <Text style={[styles.font1, { lineHeight: 19, fontSize: 13, color: '#013551', fontWeight: '400', marginTop: 12, marginLeft: 21 }]}>{item.text}</Text>
                </View>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView>
            <View>
                <Carousel
                    // ref={crouselRef}
                    layout={'default'}
                    // layoutCardOffset={0}
                    data={carouselItems}
                    sliderWidth={383}
                    itemWidth={283}
                    // itemMarginHorizontal={10}
                    inactiveSlideOpacity={0.4}
                    inactiveSlideScale={1}
                    // itemHeight={451}
                    // activeSlideOffset={activeIndex}

                    activeSlideAlignment="start"
                    slideStyle={styles.slide}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    firstItem={0}
                />
                <Pagination
                    tappableDots={true}
                    carouselRef={carouselItems}
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        marginBottom: 40,
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                        marginHorizontal: 0,
                        backgroundColor: '#F17720',
                    }}
                    inactiveDotOpacity={0.1}
                    // inactiveDotColor='red'
                    inactiveDotScale={0.9}

                />

            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    font: {
        fontFamily: 'Poppins-SemiBold',

    },
    font1: {
        fontFamily: 'Poppins-Regular',

    },
    item: {
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: 0,
        // backgroundColor: 'red',
        marginHorizontal: 10
    },
    slide: {
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: 0,
        // marginHorizontal: 10,
        marginLeft: 10,
    },
    dot: {
        backgroundColor: 'red',
        padding: 10
    },
    pagination: {
        backgroundColor: 'black'
    }
})
export default Slider;
