import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SiginInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'
import ProductInfo from '../screens/Product/ProductInfo';
import ProductDetails from '../screens/Product/ProductDetails';
import SplashScreen from '../screens/SplashScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen';
import Payment from '../screens/PaymentScreen/Paypal/Payment';
import Success from '../screens/PaymentScreen/Paypal/Success';
import { AuthContext } from '../context/AuthContext';
import { GlobalState } from '../GlobalState';


const Stack = createNativeStackNavigator();

const Navigation = () => {


// const {userInfo, splashLoading} = useContext(GlobalState);
  const {userInfo, splashLoading} = useContext(AuthContext)

  // const userInfo = state.userInfo
  // const splashLoading = state.splashLoading

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {splashLoading ? (
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
        ) :
          userInfo.accesstoken ? (
            <>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='AboutUs' component={AboutUsScreen} />
            <Stack.Screen name='Payment' component={Payment} /> 
            <Stack.Screen name='Success' component={Success}/>
            </>
          ) : (
            <>
              <Stack.Screen name='SignIn' component={SignInScreen} />
              <Stack.Screen name='SignUp' component={SignUpScreen} />
            </>
          )}





      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation