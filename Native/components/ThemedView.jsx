import { StyleSheet, View, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors' 

const ThemedView = ({style, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

    return (
        <View
            style={[{ backgroundColor: theme.background }, style]}
            {...props}
        />
        // works same as opening and closing with {children} in middle
    )
}

export default ThemedView

const styles = StyleSheet.create({})