import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

import Logo from './assets/moviesimage.jpg';
import Link from 'expo-router'
import About from './Components/about';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.main}>
        Hi, This is charan
      </Text>
      <ScrollView>
        <Text>
          1. React Native is a framework for building native mobile apps using JavaScript and React.
          2. It was developed by Facebook and released in 2015.
          3. It allows developers to write code once and run it on both Android and iOS.
          4. React Native uses native components, not WebView, for better performance.
          5. It uses React for UI design and state management.
          6. Components like View, Text, Image replace HTML tags.
          7. You style apps using JavaScript-based StyleSheet objects.
          8. Flexbox is used for layout and positioning.
          9. Apps are structured as reusable components.
          10. React Native supports navigation using external libraries like React Navigation.
          11. You can fetch API data using fetch or Axios.
          12. The UI updates automatically with state or prop changes.
          13. React Native includes development tools like Metro Bundler.
          14. You can use Expo for easier setup and testing.
          15. Expo provides device preview via QR code scanning.
          16. Native modules can be linked for camera, location, etc.
          17. Use `TouchableOpacity` or `Pressable` for touch events.
          18. React Native supports animations via `Animated` API or libraries.
          19. You can use Redux or Context API for global state.
          20. Hot reloading helps speed up development.
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
      <Link href="./Components/about.js">About Us</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  main: {
    fontSize: 40,
    color: 'blue',
    backgroundColor: 'aqua'
  },
  logo: {
    backgroundColor: 'black',
    width: '50',
    height: '50',
  }
});
