import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { ThemedText } from '@/components/ThemedText';
import { ImageBackground } from 'expo-image';
import { Link } from 'expo-router';

import ScrollStack, { ScrollStackItem } from './ScrollStack';
import SplitText from "./SplitText";

export default function Index() {
  const items = ['Affordable', 'Aesthetic', 'Housing']; 

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
        </Pressable>
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

      <View style={{flex: 1, width: '100%'}}>
        <ScrollStack>
        <ScrollStackItem >
        <View style={styles.box}>
          <Text style={{fontSize: 50}}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='Affordable' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>
        </ScrollStackItem>
        <ScrollStackItem>
          <View style={styles.box}>
          <Text style={{fontSize: 50}}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='Aesthetic' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>
        </ScrollStackItem>
        <ScrollStackItem>
          <View style={styles.box}>
          <Text style={{fontSize: 50}}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='Housing' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>
        </ScrollStackItem>
      </ScrollStack>
      </View>

      {/* <ScrollView contentContainerStyle={styles.scrollContainer} style={{flexDirection: 'column', flex: 1, width: '100%'}}>
        <View style={styles.box}>
          <Text style={{fontSize: 50}}>
            <SplitText splitType='chars' ease={"power3.out"} delay={70} threshold={0.1} text='Affordable' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
          </Text>
        </View>

        <View style={styles.box}>
          <SplitText text='Aesthetic' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
        </View>

        <View style={styles.box}>
          <SplitText text='Housing' from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}></SplitText>
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});