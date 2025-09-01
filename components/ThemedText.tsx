import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { StyleSheet, Text, View, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'navBar';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // State for tracking hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <View
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'navBar' ? styles.navBar : undefined,
        (isHovered && type === 'navBar') ? styles.hovered : undefined, // Apply the hover style when hovered
        style,
      ]}
      {...rest}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    lineHeight: 72,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
    navBar: {
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 235,
  },
    hovered: {
    textDecorationLine: 'underline', // Underline on hover (as an example)
    color: '#0a7ea4', // Change color on hover
    fontWeight: 'bold', // Make the text bold on hover
  },
});