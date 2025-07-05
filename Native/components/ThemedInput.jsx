import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

const ThemedInput = ({style, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

  return (
    <TextInput 
        style={[{
            backgroundColor: theme.inputBg,
            color: '#333',
            borderColor: theme.border,
            borderWidth: 1,
            padding: 15,
            height: 50,
            marginVertical: 8,
            borderRadius: 12,
            width: '70%',
        }, style]}
        {...props}
    />
  )
}

export default ThemedInput

const styles = StyleSheet.create({})