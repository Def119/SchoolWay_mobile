import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const DashboardLayout = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

return (
    <Tabs 
        screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: theme.headerBg },
            headerTintColor: theme.secondary,
            headerTitleStyle: { fontWeight: 'bold' }, 
            tabBarStyle: { 
                backgroundColor: theme.white,
                paddingTop: 10,
                height: 80,
            },
            tabBarActiveTintColor: theme.iconActive,
            tabBarInactiveTintColor: theme.iconInactive,
        }}
    >
        <Tabs.Screen name="dashboard" options={{ title: 'Home', tabBarIcon: ({focused})=> (
            <Ionicons name={"home"} size={24} color={focused? theme.iconActiveBlack : theme.iconInactive}/>
        ) }} />
        <Tabs.Screen name="map" options={{ title: 'Map',
            tabBarIcon: ({focused}) => (
                <FontAwesome6 name="map-location-dot" size={24} color={focused ? theme.iconActive : theme.iconInactive} />
            )
        }} />
        <Tabs.Screen name="payments" options={{ title: 'Payments',
            tabBarIcon: ({focused}) => (
                <Ionicons name="wallet" size={24} color={focused? theme.iconActive : theme.iconInactive} />
            )
        }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', 
            tabBarIcon: ({focused}) => (
                <Ionicons name={"person"} size={24} color={focused? theme.iconActiveBlue : theme.iconInactive} />
            )
        }} />
    </Tabs>
)
}

export default DashboardLayout