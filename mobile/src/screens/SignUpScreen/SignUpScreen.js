import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in")
        navigation.navigate('SignIn')
    }

    const OnSignInGoogle = () => {
        console.warn("OnSignInGoogle")
    }
    const onRegisterPressed = () => {
        console.warn("onRegisterPressed")
    }
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.pageTitle}>Sign up</Text>

                <CustomInput
                    placeholder="Username*"
                    value={userName}
                    setValue={setUserName}
                    secureTextEntry={false} />

               <CustomInput
                    placeholder="Password*"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                <CustomInput
                    placeholder="Name*"
                    value={name}
                    setValue={setName}
                    secureTextEntry={false} />

                <CustomInput
                    placeholder="Last Name*"
                    value={lastName}
                    setValue={setLastName}
                    secureTextEntry={false} />

                <CustomInput
                    placeholder="Email*"
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false} />
               

                <CustomInput
                    placeholder="Adress*"
                    value={address}
                    setValue={setAddress}
                    secureTextEntry={false} />

                <CustomInput
                    placeholder="Phone number*"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    secureTextEntry={false} />

                <CustomButton
                    text={"Register"}
                    onPress={onRegisterPressed} />


                <CustomButton
                    text={"Sign In with Google"}
                    onPress={OnSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44" />

                <CustomButton
                    text={"Already have an account? Sign In"}
                    onPress={onSignInPressed}
                    type="TERTIARY" />
                
                <Text style = {styles.text}>Made by "Go Team"</Text>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: "#2E3B55"

    },

    text: {
        padding: 5,
        color: 'gray'
    }
    

})


export default SignUpScreen