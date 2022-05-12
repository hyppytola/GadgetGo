import { View, Text, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import AntIcon from "react-native-vector-icons/AntDesign"
import { AuthContext } from '../../context/AuthContext'
import Products from '../../products/Products'




const HomeScreen = ({ navigation }) => {


  const { logout } = useContext(AuthContext)
 


  return (

    <View style={styles.root}>


      <StatusBar style={styles.StatusBar} barStyle='dark-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.firstView}>


          {/* <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Entypo name="shopping-bag"
              style={styles.shoppingBag}
            />
          </TouchableOpacity> */}


          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialCommunityIcons name="cart"
              style={styles.shoppingBag}
            />
         </TouchableOpacity>

          <TouchableOpacity>
            <AntIcon name="logout"
              style={styles.shoppingBag}
              onPress={logout}
            />
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <View style={styles.viewName}>
          <Text style={styles.textName}>Gadget Go</Text>
        </View>
        </TouchableOpacity>

       

        <Text
          style={styles.productsText}>
          Products
        </Text>
        <Products />


      </ScrollView>

    </View>


  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: "#ffffff",

  },
  statusbar: {
    backgroundColor: "#ffffff",
  },
  firstView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,

  },
  buttonLogOut: {
  },
  shoppingBag: {
    fontSize: 18,
    color: '#B9B9B9',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#F0F0F3',
  },
  cart: {
    fontSize: 18,
    color: '#B9B9B9',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0F0F3'
  },
  viewName: {
    marginBottom: 10,
    padding: 16
  },
  textName: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,

  },
  productsText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: '500',
    letterSpacing: 1,
    paddingLeft: 10,
  },
  ViewProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardTouchableOpacity: {
    width: '32%',
    marginVertical: 14,
  },
  cardView: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    backgroundColor: '#F0F0F3',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  }


})




export default HomeScreen 