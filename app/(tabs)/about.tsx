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
import BasicForm from "@/components/my-components/Basic-Form";
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

        <View>
          <Text style={{ color: "#FFF7DE", alignSelf: 'center', fontSize: 56, fontWeight: 'bold', }}>Shared Housing</Text>
        </View>
        
        <View>
          <Text style={{ color: "#FFF7DE", alignSelf: 'center', fontSize: 20, padding: 45}}>Hank's House is dedicated to providing an all-inclusive affordable shared living home to all those who are needing a new start. We offer a safe and clean living spaces. Let us help you find your place to call...Home.</Text>
        </View>

        <View>
          <Text style={{ color: "#FFF7DE", textAlign: 'center', fontSize: 28, fontWeight: 'bold', width: '100%', padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.0)', borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>Starting at $975 per month!!!</Text>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(255, 255, 255, 0.0)', borderBottomLeftRadius: 100, borderBottomRightRadius: 100}}>
          <View>
            <View style={{ padding: 10 }}>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>We Offer:</Text>
              <Text style={styles.columns}>• Fully Furnished Rooms w/ TVs</Text>
              <Text style={styles.columns}>• Wi-Fi and utilities included.</Text>
              <Text style={styles.columns}>• No Credit Check</Text>
              <Text style={styles.columns}>• Do Not Need 3x income</Text>
              <Text style={styles.columns}>• No admin fees</Text>
              <Text style={styles.columns}>• Walking distance to bus stops</Text>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>Payments Accepted:</Text>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>• SSI/SSDI</Text>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>• VA Disability</Text>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>• Housing Vouchers</Text>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>• Government Assistance</Text>
            </View>
          </View>
          
          <View>
            <View style={{ padding: 10 }}>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>What to Expect:</Text>
              <Text style={styles.columns}>• Affordability</Text>
              <Text style={styles.columns}>• Safe Supportive Environment</Text>
              <Text style={styles.columns}>• Washer/Dryer Available</Text>
              <Text style={styles.columns}>• Linen/Towels Provided</Text>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={[styles.columns, { fontWeight: 'bold' }]}>Who We Service:</Text>
              <Text style={styles.columns}>• Displaced Adults Seeking Stability</Text>
              <Text style={styles.columns}>• Re-Entry</Text>
              <Text style={styles.columns}>• Seniors</Text>
              <Text style={styles.columns}>• Veterans</Text>
              <Text style={styles.columns}>• Homeless</Text>
              <Text style={styles.columns}>• Fixed Income</Text>
              <Text style={styles.columns}>• Single Moms/Dads</Text>
            </View>
          </View>
        </View>
        
        <View style={{ width: '50%', alignSelf: 'center' }}>
          <Text style={styles.heading}>Contact Us Today</Text>
          <BasicForm isTablet/>
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
  columns: {
    color: "#FFF7DE",
    fontSize: 20,
  },
  heading: { fontSize: 33, marginTop: 20, marginBottom: 20, alignSelf: 'center', fontFamily: 'Playfair', color: "#FFF7DE", },
});

export default About;
