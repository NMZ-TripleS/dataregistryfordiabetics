import { AppRegistry } from 'react-native';
import { expo  } from './app.json';
import { useFonts } from 'expo-font';
import { configureFonts,DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Font, MD3Type } from 'react-native-paper/lib/typescript/src/types';
type MD3Type1 = {
  fontFamily: string;
  fontWeight: Font['fontWeight'];
} | MD3Type;
const FontConfig:Record<string,Record<string,MD3Type1>> = {
  web: {
    regular: {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'poppins',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'poppins-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'poppins-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'poppins-thin',
      fontWeight: 'normal',
    },
  },
  default: {
    regular: {
      fontFamily: 'poppins',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'poppins-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'poppins-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'poppins-thin',
      fontWeight: 'normal',
    },
  },
};
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(FontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function Main() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-medium':require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-light':require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-thin':require('./assets/fonts/Poppins-Thin.ttf'),
  });
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(expo.name, () => Main);

export function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
