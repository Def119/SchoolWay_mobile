import { StyleSheet, View, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors' 

const ThemedCard = ({style, children, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

    return (
        <View
            style={[{ backgroundColor: theme.cardBackground }, styles.card]}
            {...props}
        >
            {children}
        </View>
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card:{
        borderRadius: 10,
        padding: 10,
    }
})