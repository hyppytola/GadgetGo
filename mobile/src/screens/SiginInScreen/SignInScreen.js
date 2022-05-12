import React, { useContext, useState, } from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { backend } from "../../../config/config.json";
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    


    const navigation = useNavigation();
    const {isLoading, login} = useContext(AuthContext);



    const onForgotPassword = () => {
        console.warn("onForgotPassword")
    }
    const OnSignInGoogle = () => {
        console.warn("OnSignInGoogle")
    }
    const onSignUpPressed = () => {


        navigation.navigate('SignUp')

    }
    return (
        <View style={styles.root}>
            <Spinner visible={isLoading}/>
            <Text style={styles.pageTitle}>Sign in</Text>

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                secureTextEntry={false} />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomButton
                text={"Sign In"}
                onPress={() => {
                    login(email, password)
                }} />

            <CustomButton
                text={"Forgot Password?"}
                onPress={onForgotPassword}
                type="TERTIARY" />
            {/* 
            <CustomButton
                text={"Sign In with Google"}
                onPress={OnSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44" /> */}

            <CustomButton
                text={"Don't have an account? Create one"}
                onPress={onSignUpPressed}
                type="TERTIARY" />

            <Text style={styles.text}>Made by "Go Team"</Text>

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
    },
   

})




export default SignInScreen