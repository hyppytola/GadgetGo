import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {backend} from "../../config/config.json"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[userInfo, setUserInfo] = useState({});
    const[isLoading, setIsLoading] = useState(false)
    const[splashLoading, setsplashLoading] = useState(false)
    const [token, setToken] = useState('')

   


    const register = (name, email, password) => {
        
        setIsLoading(true) 
        axios 
            .post(`http://${backend.host}:${backend.port}/user/register`, {
                name,
                email,
                password
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                setIsLoading(false)
                console.log(userInfo);
            })
            .catch(error => {

                  console.warn(err.response.data.msg)
                  setIsLoading(false)
            });
        
    };

    const login = (email, password) => {
    
        setIsLoading(true)
        axios 
        .post(`http://${backend.host}:${backend.port}/user/login`, {
            email,
            password
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setIsLoading(false)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
           
            console.log(userInfo);
        })
        .catch(error => {

              console.warn(error.response.data.msg)
              setIsLoading(false)
        });
    }

    

    const logout = async() => {
        setIsLoading(true)
        await axios.get(`http://${backend.host}:${backend.port}/user/logout`)
        .then(res => {
            console.log(res),
            AsyncStorage.removeItem('userInfo')
            setIsLoading(false)
            setUserInfo({})
           
        })
        .catch(error => {

            console.log(`Logout error ${error}`);
            setIsLoading(false)
      });
    } 

    const IsLoggedIn = async () => {
        try{
            setsplashLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
            setUserInfo(userInfo)
            if(userInfo) {
                
               
                // console.log(userInfo.accesstoken)
                setToken(userInfo.accesstoken)
                    const refreshToken = async () =>{
                        const res = await axios.get(`http://${backend.host}:${backend.port}/user/refresh_token`)

                
                        setToken(res.data.accesstoken)
            
                        setTimeout(() => {
                            refreshToken()
                        }, 10 * 60 * 1000)

                        refreshToken()
                    }
                
            }
            setsplashLoading(false)

        } catch (e) {
            setsplashLoading(false)
            console.log(`is logged in error ${e}`)
        }
    }

    useEffect(() => {
      IsLoggedIn();
    }, []);
    

    return (
        <AuthContext.Provider
          value={{
              isLoading,
              userInfo,
              splashLoading,
              token,
              register,
              login,
              logout,
            }}>
          {children}
        </AuthContext.Provider>
      );

}