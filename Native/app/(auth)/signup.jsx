import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
// import React from 'react'
import ThemedText  from '../../components/ThemedText'
import ThemedView  from '../../components/ThemedView'
import Spacer from '../../components/Spacer'

 
const login = () => {
  return (
    <ThemedView>
        <ThemedText title={true} >Create New Account</ThemedText>
        <Spacer/>
        <Link href='/register' style={{color: '#444', fontWeight: '800', textDecorationLine: 'underline'}}>Register</Link>
        <Link href='/login' style={{color: '#444', fontWeight: '800', textDecorationLine: 'underline'}}>Login Instead</Link>
    </ThemedView>
  )
}

export default login