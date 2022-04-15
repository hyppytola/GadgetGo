import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();


    const onSignInPressed = () => {
        console.warn("Sign in")
        

        navigation.navigate('Home')
    }
    const onForgotPassword = () => {
        console.warn("onForgotPassword")
    }
    const OnSignInGoogle = () => {
        console.warn("OnSignInGoogle")
    }
    const onSignUpPressed = () => {
        console.warn("onSignUpPressed")

        navigation.navigate('SignUp')
    }
    return (
        <View style={styles.root}>
            <Text style={styles.pageTitle}>Sign in</Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
                secureTextEntry={false} />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomButton
                text={"Sign In"}
                onPress={onSignInPressed} />

            <CustomButton
                text={"Forgot Password?"}
                onPress={onForgotPassword}
                type="TERTIARY" />

            <CustomButton
                text={"Sign In with Google"}
                onPress={OnSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44" />

            <CustomButton
                text={"Don't have an account? Create one"}
                onPress={onSignUpPressed}
                type="TERTIARY" />

            <Text style = {styles.text}>Made by "Go Team"</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    pageTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        paddingTop: 100,
        paddingBottom: 50,
        color: "#2E3B55"

    },
    text: {
        padding: 7,
        color: 'gray'
    }

})


export default SignInScreen