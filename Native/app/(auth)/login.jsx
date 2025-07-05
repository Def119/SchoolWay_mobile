import { useState } from 'react';
import { Pressable, StyleSheet, Alert, Text } from 'react-native';
import { Link } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedInput from '../../components/ThemedInput';
import ThemedLogo from '../../components/ThemedLogo';
import ThemedBtn from '../../components/ThemedBtn';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with your authentication logic
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Example: console.log('Logging in with', email, password);
    Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedLogo style={{ width: 200, marginBottom: 20 }} />
      <Spacer height={30}/>

      <ThemedText title={true} style={{width: '75%', fontSize: 20}}>
        Welcome Back!
      </ThemedText>

      <ThemedInput
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <ThemedInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Link
        href='/register'
        style={[{ width: '75%',  fontSize:12 }, styles.link]}
      >
        Forgot your password?
      </Link>
      {/* LOG IN Button */}
      {/* <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.clickedButton,
        ]}
        onPress={handleLogin}
      >
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </Pressable> */}
      
      <ThemedBtn onPress={handleLogin} style={{ marginTop: 15, marginBottom : 20 }}>
        <Text style={styles.buttonText}>Log In</Text>
      </ThemedBtn>

      
      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <ThemedText>Not a member?</ThemedText>
        <Link
          href="/signup"
          style={[styles.link, { marginTop: 0, marginBottom: 0, marginLeft: 5 }]}
        >
          Register Now
        </Link>
      </ThemedView>
      <Spacer />
      <Spacer />
      <Spacer />
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    width: '75%',
    marginBottom: 5,
  },
  // BUtton styles
  button: {
    width: '75%',
  },
  clickedButton: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  link: {
    marginTop: 5,
    marginBottom: 10,
    color: '#006FFD',
    fontWeight: 'bold',
  },
});