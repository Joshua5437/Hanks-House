import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TouchEffectText = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={() => setIsHovered(true)} // Simulating hover on touch
        onPressOut={() => setIsHovered(false)} // Simulating hover exit
      >
        <Text style={[styles.text, isHovered && styles.hoverText]}>
          Touch me!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  hoverText: {
    color: 'blue', // Change the color on hover
    fontWeight: 'bold', // Change font weight on hover
  },
});

export default TouchEffectText;
