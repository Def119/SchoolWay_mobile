import { StyleSheet, Text, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors' 

const ThemedText = ({style, title=false, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;
    const textColor = title ? theme.titleColor : theme.black;

    return (
        <Text
            style={[{ color: textColor }, title? styles.title : null ,style]}
            {...props}
        />
    )
}

export default ThemedText

// Add padding size and other styles if needed for titles, use a conditional style to add them to <Text/S>
const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
    }
})