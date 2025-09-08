import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/my-images/New-Logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  logo: {
    width: '40%',
    aspectRatio: 1, // Maintains square aspect ratio
    minWidth: 100,
    maxWidth: 200,
    height: 'auto',
  },
});

export default Logo;