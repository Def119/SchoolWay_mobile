import { Stack } from 'expo-router';
import { useColorScheme, StatusBar } from 'react-native';
import { Colors  } from '../../constants/Colors';

export default function RootLayout() {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;
    console.log('Current color theme:', theme);

return (
    <>
    {/* <StatusBar style='auto'/> */}
    <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.headerBg },
        headerTintColor: theme.secondary,
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false // removed the header from auth pages
    }}>
        {/* <Stack.Screen name="/login" options={{ title: 'Login'}} /> */}
        {/* <Stack.Screen name="(auth)/signup" options={{ title: 'Sign Up'}} /> */}
    </Stack>
    </>
);
}
