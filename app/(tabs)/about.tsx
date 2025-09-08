import { Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import Father from "@/components/my-components/About-Img";
import Backdrop from "@/components/my-components/Backdrop";
import Header from "@/components/my-components/Header";
import SplitText from "@/components/SplitText/SplitText";

const About = () => {
  const HEADER_HEIGHT = 189;
  const scrollY = useSharedValue(0);
  const ReanimatedScrollView = Animated.ScrollView;

  const { width } = useWindowDimensions();
  const isTablet = width > 800;

  const about=`Hank's House believes everyone deserves safe, high-quality and supportive housing.

Our home leasing company offers well maintained properties and a stress-free rental process tailored to your unique needs.`

  const values=`Respect and Dignity: Treating everyone with the respect they deserve

Integrity: Delivering on every promise with honesty and transparency

Community: Fostering a sense of belonging and connection for all residents`

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, HEADER_HEIGHT],
            [0, -HEADER_HEIGHT],
            Extrapolation.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        scrollY.value,
        [0, HEADER_HEIGHT / 2],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Backdrop />
      <Animated.View style={[ animatedHeaderStyle]}>
        <Header />
      </Animated.View>

      <ReanimatedScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        removeClippedSubviews={Platform.OS !== "web"} // Disable on web
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title, {fontSize: (isTablet ? 100 : 56), justifyContent: 'center' }]}>
          <SplitText text='About Us'></SplitText>
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.subtitle, {fontSize: (isTablet ? 35 : 20), width: (isTablet ? '50%' : '90%')}]}>{about}</Text>
          <Father />
        </View>
        
        <Text style={[styles.title, {fontSize: (isTablet ? 100 : 56), justifyContent: 'center' }]}>Our Values</Text>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={[styles.subtitle, {fontSize: (isTablet ? 35 : 20), width: (isTablet ? '50%' : '90%')}]}>{values}</Text>
        </View>
      </ReanimatedScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 'auto',
  },
  title: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    color: "#FFF7DE",
    fontSize: 56,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 40,
    flexWrap: "wrap",
    color: "#FFF7DE",
  },
});

export default About;
