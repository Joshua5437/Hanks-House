import FadeContent from '../FadeContent/FadeContent';
import ShinyText from '../ShinyText/ShinyText';

import { Pressable, StyleSheet, Text, View } from 'react-native';

const Main = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Affordable and Aesthetically Pleasing Locations</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Home Starts Here</Text>
      </View>
      <View style={{padding: 30}}>
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

export default Main;

const styles = StyleSheet.create({
  title: {
    width: '70%',
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: '#FFF7DE',
    fontSize: 56,
    fontWeight: 'bold',
  },
  subtitle: {
    padding: 20,
    fontSize: 35,
    color: '#FFF7DE',
  },
  button: {
    width: '25%',
    height: 43,
    width: 147,
    backgroundColor: '#FFF7DE',
    paddingVertical: 9,
    paddingHorizontal: 15,
    fontSize: 23,
    fontWeight: '400',
    borderRadius: 30,
  }
});