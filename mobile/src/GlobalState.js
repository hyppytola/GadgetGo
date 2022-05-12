import { View, Text } from 'react-native'
import React, {createContext, useState, useEffect, useContext} from 'react'
import ProdctsAPI from './api/ProdctsAPI'
import UserAPI from './api/UserAPI'
import { AuthContext } from './context/AuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {backend} from "../config/config.json"
import axios from 'axios';

export const GlobalState = createContext()


export const DataProvider = ({children}) => {
    const{token} = useContext(AuthContext)
    

    const[splashLoading, setsplashLoading] = useState(false)
    const[userInfo, setUserInfo] = useState({});

    // const IsLoggedIn = async () => {
    //     try{
    //         setsplashLoading(true)
    //         let userInfo = await AsyncStorage.getItem('userInfo')
    //         userInfo = JSON.parse(userInfo)

    //         if(userInfo) {
    //             setUserInfo(userInfo)
    //             const refreshToken = async () =>{
    //                 const res = await axios.get(`http://${backend.host}:${backend.port}/user/refresh_token`)
    //                 console.log(res.data)
            
    //                 setToken(res.data.accesstoken)
        
    //                 setTimeout(() => {
    //                     refreshToken()
    //                 }, 10 * 60 * 1000)
    //             }
    //             refreshToken()
    //         }
    //         setsplashLoading(false)

    //     } catch (e) {
    //         setsplashLoading(false)
    //         console.log(`is logged in error ${e}`)
    //     }
    // }

    useEffect(() => {
    //   IsLoggedIn()
    }, [])
    

    const state = {
        token: token,
        ProdctsAPI: ProdctsAPI(),
        userAPI : UserAPI(token)
    }

  return (
      <GlobalState.Provider value={state}>
          {children}
      </GlobalState.Provider>
    
  )
}
