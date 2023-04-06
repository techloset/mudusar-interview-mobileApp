import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Slider = () => {
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
        return (
            <ImageBackground style={{ marginHorizontal: 10 }} source={require('../assets/images/sliderImg.png')}>
                <View
                    style={{
                        // backgroundColor: 'floralwhite',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: 5,
                        height: 450,
                        // padding: 50,
                        marginLeft: 21,
                        marginRight: 36,
                    }}>

                    <Text style={[styles.font, { lineHeight: 24, fontSize: 16, color: '#013551', fontWeight: '600', }]}>{item.title}</Text>
                    <Text style={[styles.font, { lineHeight: 24, fontSize: 13, color: '#013551', fontWeight: '400', marginTop: 12 }]}>{item.text}</Text>
                </View>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView>
            <View>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={0}
                    data={carouselItems}
                    sliderWidth={380}
                    itemWidth={293}
                    // itemHeight={451}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
                <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        // color: '#F17720',
                        // marginTop: -12,
                        marginBottom: 40,
                        // paddingBottom: 20,
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
        fontFamily: 'Poppins-Medium',

    }
})
export default Slider;
