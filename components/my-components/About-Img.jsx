import { Image, StyleSheet, View } from "react-native";

const Father = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/my-images/Father.png')}
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
    flexGrow: 1,
  },
  logo: {
    width: '100%',
    height: 'auto',
    maxHeight: 675,
    aspectRatio: 1, // Maintains square aspect ratio
    borderColor: '#FFF7DE',
  },
});

export default Father;