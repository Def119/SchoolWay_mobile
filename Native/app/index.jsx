import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
// import { useColorScheme } from 'react-native';
// import { Colors } from '../constants/Colors'; 
import ThemedView from '../components/ThemedView'; 
import ThemedCard from '../components/ThemedCard'; 
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';

const Home = () => {
    // const colorTheme = useColorScheme();
    // const theme = Colors[colorTheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container]}>
    <ThemedLogo  style={styles.logo}/>
      <Text style={styles.text}>Hello, World!</Text>
      <Text>ELlo</Text>
      <Link href='/about' style={styles.link}>What's SchoolWay</Link>
      <Link href='/login' style={styles.link}>Log in</Link>
      <ThemedCard>
        <Text>Amo Amo</Text>
      </ThemedCard>
        <ThemedText title={true} >this is a themed title</ThemedText>
    </ThemedView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#444',
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
    logo: {
        width: 200,
        // height: 20,
        marginBottom: 20,
    },
});