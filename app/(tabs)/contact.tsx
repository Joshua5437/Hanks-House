import React from 'react';
import { Image, Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from '@/components/ThemedText';
import { ImageBackground } from 'expo-image';
import { Link } from 'expo-router';

import BasicForm from '../basic-form';

export default function Contact() {

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
        flex: 0.25,
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
        <Link href={"./about"}>
          <ThemedText type="navBar">About</ThemedText>
        </Link>
        <Link href={"./contact"}>
            <ThemedText type="navBar">Contact</ThemedText>
        </Link>
        <Link href={"./properties"}>
            <ThemedText type="navBar">Properties</ThemedText>
        </Link>
      </View>

      <View style={{flex: 1, width: '100%', backgroundColor: 'blue'}}>
        <BasicForm />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
});