import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { ThemedText } from '@/components/ThemedText';
import { ImageBackground } from 'expo-image';
import { Link, useRouter } from 'expo-router';

import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import ShinyText from './ShinyText';
import SplitText from "./SplitText";

export default function Index() {
  const router = useRouter();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <View style={styles.container}>
      {/* Background view with absolute positioning */}
      <View style={styles.background}>
        <ImageBackground
          source={require('@/assets/images/new-background.png')}
          style={styles.backgroundImage}
        />
      </View>
      {/* Layers over the background */}

      <View style={{
        flex: .4,
        justifyContent: "space-evenly",
        flexDirection: 'row',
        width: '100%',
      }}>
        <Pressable>
          <Image
            source={require('@/assets/images/Hanks-House-Logo.png')}
            style={[styles.image, {resizeMode: 'contain'}]}
          />
        </Pressable >
        <Link href={"./(tabs)/about"}>
          <ThemedText type="navBar">About</ThemedText>
        </Link>
        <Link href={"./(tabs)/contact"}>
            <ThemedText type="navBar">Contact</ThemedText>
        </Link>
        <Link href={"./(tabs)/properties"}>
            <ThemedText type="navBar">Properties</ThemedText>
        </Link>
      </View>

      <View style={{flex: 1, width: '50%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', paddingLeft: 200}}>
        <ThemedText type='welcome'>
          <SplitText text='Affordable and Aesthetically Pleasing Locations' splitType='lines'></SplitText>
        </ThemedText>
        <Text style={{lineHeight: 0, fontSize: 35, color: '#FFF7DE',}}>
          <BlurText
              text='Home Starts Here'
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
        </Text>

        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <Pressable style={styles.button} onPress={() => router.push("/contact")}>
            <ShinyText 
              text="Contact Us" 
              disabled={false} 
              speed={3} 
              className='custom-class' 
            />
          </Pressable>
        </FadeContent>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    marginVertical: 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
    button: {
    backgroundColor: '#FFF7DE',
    paddingVertical: 9,
    paddingHorizontal: 15,
    fontSize: 23,
    fontWeight: '400',
    borderRadius: 30, // 👈 makes it rounded
    alignItems: "center",

    // // Outline
    // borderWidth: 2,         // thickness
    // borderColor: "#fff",    // color of the outline
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});