import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors  } from '../constants/Colors';

export default function RootLayout() {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;
    console.log('Current color theme:', theme);

return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.headerBg },
        headerTintColor: theme.secondary,
        headerTitleStyle: { fontWeight: 'bold' },
    }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About SchoolWay', headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(driver_dashboard)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(auth)/login" options={{ title: 'Login'}} />
        <Stack.Screen name="(auth)/signup" options={{ title: 'Sign Up'}} /> */}
    </Stack>
);
}
