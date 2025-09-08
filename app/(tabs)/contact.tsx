import {
    Platform,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

import Backdrop from "@/components/my-components/Backdrop";
import Header from "@/components/my-components/Header";
import SplitText from "@/components/SplitText/SplitText";
import BasicForm from "@/components/my-components/Basic-Form";

const Contact = () => {
  const HEADER_HEIGHT = 275;
  const scrollY = useSharedValue(0);
  const ReanimatedScrollView = Animated.ScrollView;

  const { width } = useWindowDimensions();
  const isTablet = width > 900;

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
        <Text style={[styles.title, {fontSize: (isTablet ? 75 : 56), justifyContent: 'center' }]}>
          <SplitText text='Contact Us' splitType='words'></SplitText>
        </Text>

        <View style={{ flexDirection: (isTablet ? 'row' : 'column'), padding: 20, justifyContent: 'center'}}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[styles.subtitle, {fontSize: (isTablet ? 35 : 20)}]}>
              <SplitText text='Email: info@hankshouse.us' splitType='words'></SplitText>
            </Text>
            <Text style={[styles.subtitle, {fontSize: (isTablet ? 35 : 20)}]}>
              <SplitText text='Phone: (225) 330-1201' splitType='words'></SplitText>
            </Text>
          </View>
          <BasicForm isTablet={isTablet}/>
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
    paddingVertical: "auto",
  },
  title: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    color: "#FFF7DE",
    fontWeight: "bold",
    height: 'auto',
  },
  subtitle: {
    height: 50,
    color: "#FFF7DE",
  },
});

export default Contact;
