import { Link } from 'expo-router';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import Logo from '@/components/my-components/Logo';
import HoverText from '@/components/my-components/HoverEffect';

const Header = () => {
  const { width } = useWindowDimensions();
  const isTablet = width > 800;

  return (
    <View style={styles.header}>
      <Logo />
      <Link href={"../(tabs)/about"}>
        <HoverText text="About" navBar={[styles.navBar, {fontSize: (isTablet ? 30 : 15)}]} hovered={[styles.hovered, {fontSize: (isTablet ? 35 : 15)}]}  />
      </Link>
      <Link href={"../(tabs)/contact"}>
        <HoverText text="Contact" navBar={[styles.navBar, {fontSize: (isTablet ? 30 : 15)}]} hovered={[styles.hovered, {fontSize: (isTablet ? 35 : 15)}]} />
      </Link>
      <Link href={"../(tabs)/properties"}>
        <HoverText text="Properties" navBar={[styles.navBar, {fontSize: (isTablet ? 30 : 15)}]} hovered={[styles.hovered, {fontSize: (isTablet ? 35 : 15)}]} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    flexDirection: 'row',
  },
  navBar: {
    color: '#FFF7DE',
    fontWeight: 'bold',
  },
  hovered: {
    textDecorationLine: 'underline', // Underline on hover (as an example)
    color: '#0a7ea4', // Change color on hover
    fontWeight: 'bold', // Make the text bold on hover
  },
});

export default Header;
