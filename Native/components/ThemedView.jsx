import { StyleSheet, View, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors' 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { use } from 'react';

const ThemedView = ({style, safe=false, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

    if(!safe) return (
        <View
            style={[{ backgroundColor: theme.background }, style]}
            {...props}
        />
        // works same as opening and closing with {children} in middle
    )


    const insets = useSafeAreaInsets();

    return (
        <View
            style={[{ 
                backgroundColor: theme.background,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
             }, style
            ]}
            {...props}
        />
    )
}

export default ThemedView

const styles = StyleSheet.create({})