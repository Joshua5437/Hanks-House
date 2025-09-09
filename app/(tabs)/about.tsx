import React, { useState } from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
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
import SplitText from '../SplitText';

import BlurText from "../BlurText";
import CurvedLoop from '../CurvedLoop';

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

    const about=`Hank's House believes everyone deserves safe, high-quality and supportive housing.
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
        <View style={[styles.titleView, { zIndex: 12, alignItems: 'flex-start'}]}>
          <Text style={[styles.titleText, {width: '75%'}]}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='About Us' from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>

        <View style={{ width: '100%', height: 250, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '40%', alignSelf: 'center'}}>
            <Text style={{
              fontSize: 25,
              fontWeight: '500',
              lineHeight: 40,
              color:'#FFF7DE',
              }}>
              <SplitText splitType='lines' ease={"power3.out"} delay={70} threshold={0.1} text={about} from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }}></SplitText>
            </Text>
          </View>

          <View style={{alignSelf: 'center'}}>
            <Image
              source={require('@/assets/images/Father.png')}
              style={{height: 675, width: 507, resizeMode: 'contain', borderRadius: 50, borderWidth: 3, borderColor: '#FFF7DE'}}
            />
          </View>

        </View>

        <View style={{zIndex: 10,}}>
          <CurvedLoop 
            marqueeText="Appreciation ✦ Courtesy ✦ Worth ✦ Honor ✦ Grace ✦ Morality ✦ Principle ✦ Honesty ✦ Honor ✦ Fellowship ✦ Unity ✦ Love ✦ Growth ✦ Prosperity ✦"
            curveAmount={200}
            direction="left"
            interactive={true}
            className="custom-text-style"
          />
        </View>


        {/* Values */}
        
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            <BlurText
              text='Our Values'
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          </Text>
          <Text style={styles.titleText}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='' from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>

        <View style={{flex: 1, width: '45%', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-evenly',paddingLeft: 40}}>
          <Text style={{
            fontSize: 25,
            fontWeight: '500',
            lineHeight: 25,
            color:'#FFF7DE',
            }}>
              <BlurText
              text={values}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          </Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 35,
            color:'#FFF7DE',
            }}>
            <Text></Text>
          </Text>
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
