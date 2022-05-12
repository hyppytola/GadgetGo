import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { backend } from "../../../config/config.json";
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


const SignUpScreen = () => {
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    
    const {isLoading, register} = useContext(AuthContext);

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in")
        navigation.navigate('SignIn')
        

        // const addressText = (await axios({
        //     method: 'get',
        //     url: http://${config.database.elastic.host}:${config.database.elastic.port}/address/address/${apartment._id},
        //   })).data;
    }

    const OnSignInGoogle = () => {
        console.warn("OnSignInGoogle")
    }
    
    return (
        <ScrollView>
            <View style={styles.root}>
                <Spinner visible={isLoading} />
                <Text style={styles.pageTitle}>Sign up</Text>

                

                {/* <CustomInput
                    placeholder="Username*"
                    value={userName}
                    setValue={setUserName}
                    secureTextEntry={false} /> */}
                     <CustomInput
                    placeholder="Name*"
                    value={name}
                    setValue={setName}
                    secureTextEntry={false} />

               <CustomInput
                    placeholder="Password*"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                

                {/* <CustomInput
                    placeholder="Last Name*"
                    value={lastName}
                    setValue={setLastName}
                    secureTextEntry={false} /> */}

                <CustomInput
                    placeholder="Email*"
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false} />
               

                {/* <CustomInput
                    placeholder="Adress*"
                    value={address}
                    setValue={setAddress}
                    secureTextEntry={false} /> */}
{/* 
                <CustomInput
                    placeholder="Phone number*"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    secureTextEntry={false} /> */}

                <CustomButton
                    text={"Register"}
                    onPress={() => {
                        register(name, email, password)
                    }} />


                {/* <CustomButton
                    text={"Sign In with Google"}
                    onPress={OnSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44" /> */}

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