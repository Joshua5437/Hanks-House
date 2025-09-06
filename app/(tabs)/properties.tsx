import React, { useState } from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Image, ImageBackground } from 'expo-image';
import { Link, useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';


import CircularGallery from '../CircularGallery';

import YoutubeEmbed from "@/app/YouTube/YouTube";
import "@/app/YouTube/YouTube.css";

const HEADER_HEIGHT = 275;

const ReanimatedScrollView = Animated.ScrollView;

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Component that animates when it enters view
const AnimatedItem = ({ scrollY, children }: any) => {
  const [layoutY, setLayoutY] = useState(0);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const animatedStyle = useAnimatedStyle(() => {
    const distanceFromTop = scrollY.value;
    const startFade = layoutY - SCREEN_HEIGHT;
    const endFade = layoutY;

    const opacity = interpolate(
      distanceFromTop,
      [startFade, endFade],
      [0, 1],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      distanceFromTop,
      [startFade, endFade],
      [20, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [layoutY]);

  return (
    <Animated.View
      style={[styles.item, animatedStyle]}
      onLayout={(e) => setLayoutY(e.nativeEvent.layout.y)}
    >
      {children}
    </Animated.View>
  );
};

export default function AnimatedScrollScreen() {
  const myPhotos = [
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/Location-1/Dining%20Room.png`, text: 'Dining Room' },
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/Location-1/Kitchen.png`, text: 'Kitchen' },
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/Location-1/Bedroom.png`, text: 'Guest Bedroom' },
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/Location-1/Bedroom%20%232.png`, text: 'Master Bedroom' },
  ];

  const router = useRouter();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, HEADER_HEIGHT],
            [0, -HEADER_HEIGHT],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(scrollY.value, [0, HEADER_HEIGHT / 2], [1, 0], Extrapolate.CLAMP),
    };
  });

    const about=`Hank's House believes those that have served our country deserve safe, high-quality and supportive housing.
               Our home leasing company offers well maintained properties and a stress-free rental process tailored to your unique needs.`

    const values=`Respect and Dignity: Treating everyone with the respect they deserve
    Integrity: Delivering on every promise with honesty and transparency
    Community: Fostering a sense of belonging and connection for all residents`

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        <Pressable onPress={() => router.navigate("/")}>
            <Image
            source={require('@/assets/images/Hanks-House-Logo.png')}
            style={[styles.image, {resizeMode: 'contain'}]}
            />
        </Pressable>
        <Link href={"./about"}>
            <ThemedText type="navBar">About</ThemedText>
        </Link>
        <Link href={"./contact"}>
            <ThemedText type="navBar">Contact</ThemedText>
        </Link>
        <Link href={"./properties"}>
            <ThemedText type="navBar">Properties</ThemedText>
        </Link>
      </Animated.View>

        <View style={styles.background}>
            <ImageBackground
            source={require('@/assets/images/new-background.png')}
            style={styles.backgroundImage}
            />
        </View>

      <ReanimatedScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        removeClippedSubviews={Platform.OS !== 'web'} // Disable on web
        contentContainerStyle={styles.scrollContent}
      >
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center',  height: 480, width: 854}}>
          <YoutubeEmbed embedId="gcp-WFL0zPc" />
        </View>

        <View style={{flex: 1, width: '100%'}}>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
            items={myPhotos}
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}/>
          </div>
        </View>
      </ReanimatedScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    flexDirection: 'row'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollContainer: {
    paddingTop: HEADER_HEIGHT,
    paddingBottom: 50,
  },
  item: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  background: {
    position: 'absolute',  // Takes the background behind everything
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
    image: {
    height: 275,
    width: 400,
  },
    titleView: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent:  'space-evenly',
  },
    titleText: {
    fontSize: 120,
    fontWeight: 'bold',
    lineHeight: 120,
    color:'#FFF7DE',
  },
    scrollContent: {
    paddingVertical: 275,
  },
});
