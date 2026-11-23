import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { artists } from './src/data/artists';
import type { RootStackParamList } from './src/navigation';
import { HomeScreen } from './src/screens/HomeScreen';
import { ArtistScreen } from './src/screens/ArtistScreen';
import { theme } from './src/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: theme.background,
    card: theme.nav,
    text: theme.text,
    primary: theme.gold,
    border: theme.border,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerTintColor: theme.gold, headerStyle: { backgroundColor: theme.nav } }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Artist"
            component={ArtistScreen}
            options={({ route }) => ({
              title: artists.find(item => item.id === route.params.artistId)?.name ?? 'Artista',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
