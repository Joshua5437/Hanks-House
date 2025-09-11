import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import CircularGallery from "@/components/CircularGallery/CircularGallery";
import Backdrop from "@/components/my-components/Backdrop";
import Header from "@/components/my-components/Header";
import YoutubeEmbed from "@/components/my-components/YouTube";

const About = () => {
  const HEADER_HEIGHT = 189;
  const scrollY = useSharedValue(0);
  const ReanimatedScrollView = Animated.ScrollView;

  const { width } = useWindowDimensions();
  const isTablet = width > 800;
  
  const myPhotos = [
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/my-images/Location-1/Dining%20Room.png`, text: 'Dining Room' },
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/my-images/Location-1/Kitchen.png`, text: 'Kitchen' },
    { image: `https://raw.githubusercontent.com/Joshua5437/Hanks-House/refs/heads/main/assets/images/my-images/Location-1/Bedroom.png`, text: 'Guest Bedroom' },
    { image: `https://github.com/Joshua5437/Hanks-House/blob/main/assets/images/my-images/Location-1/Bedroom%20%232.png`, text: 'Master Bedroom' },
  ];

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
      <Animated.View style={[animatedHeaderStyle]}>
        <Header />
      </Animated.View>

      <ReanimatedScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        removeClippedSubviews={Platform.OS !== "web"} // Disable on web
        contentContainerStyle={styles.scrollContent}
      >

        <CircularGallery
          items={myPhotos}
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
        
        <View style={{ paddingBottom: 400, flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}}>
          <YoutubeEmbed embedId="gcp-WFL0zPc" />
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
