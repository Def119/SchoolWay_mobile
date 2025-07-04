import { StyleSheet, View, useColorScheme, Image } from 'react-native'
import {Colors} from '../constants/Colors' 
import lightLogo from '../assets/Logo_green.png';
import darkLogo from '../assets/Logo_dark.png';

const ThemedLogo = ({style, ...props}) => {
    const colorTheme = useColorScheme();
    const Logo = colorTheme === 'light' ? lightLogo : darkLogo;

    return (
        <Image source={Logo} style={[styles.logo, style]}  resizeMode= 'contain' {...props}></Image>
    )
}

export default ThemedLogo

const styles = StyleSheet.create({
    logo: {
        width: 250,
        // height: 75,
        marginBottom: 20,
    },
})