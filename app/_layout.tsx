import { Stack } from "expo-router";
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  initialRouteName: "index",
}

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}} />
  // <Stack>
  //   <Stack.Screen
  //     name='index'
  //     options={{
  //       title: "Hank's House",
  //       headerBackground: () => (
  //         <Pressable>
  //           <Image
  //             source={require('@/assets/images/Hanks-House-Logo.png')}
  //             style={[styles.image, {resizeMode: 'contain'}]}
  //           />
  //         </Pressable>
  //       ),
  //     }}
  //   />
  // </Stack>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 12,
    alignItems: 'center',
    gap: 16,
  },
  image: {
    borderWidth: 1,
    borderColor: 'red',
    height: 100,
    width: 200,
  },
  text: {
    textAlign: 'center',
    marginBottom: 12,
  },
});
