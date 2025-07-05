import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';


const ThemedBtn = ({style, children, pressed, ...props}) => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme] ?? Colors.light;

  return (
    <Pressable 
    style={({pressed})=>[styles.btn, pressed? styles.pressed : null, style]}
    {...props}  
    >
      {children}
    </Pressable>
  )
}

export default ThemedBtn

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.light.buttonPressedBg,
        padding: Colors.light.buttonPadding,
        borderRadius: Colors.light.buttonCornerRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        width:'80%',
        height: 50,
    },
    pressed:{
        backgroundColor: Colors.light.buttonBg,
    }
})