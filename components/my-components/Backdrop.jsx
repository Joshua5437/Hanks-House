import { ImageBackground } from 'expo-image';
import { StyleSheet, View } from "react-native"; // Added StyleSheet import

const Backdrop = () => {
  return (
    <View style={styles.backdrop}>
      <ImageBackground
        source={require('@/assets/images/my-images/backdrop.png')}
        style={styles.backdropImage}
        contentFit='cover'
      />
    </View>
  );
};

export default Backdrop;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backdropImage: {
    flex: 1,
  },
});