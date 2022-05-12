import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutUsScreen = ({navigation}) => {
    return (
        
        <View style = {styles.view1}>
            <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: '#777777',
                padding: 10,
                backgroundColor: '#F3F0F1',
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>

        </View>
            <Text style = {styles.textTitle}>About Us</Text>
            <Text style= {styles.textContent}>
                GadgetGo online hardware store is a platform for
                online purchases of various electronic devices, where everyone has the opportunity to
                purchase devices, view reviews of the desired product. New digital technologies, the most
                fashionable gadgets, innovative electronics products – in one place you can find everything
                that you need. In GadjetGo online store you will find modern smartphones, computers, printers,
                laptops, and much more Roles
            </Text>
        </View>


    )
}

const styles = StyleSheet.create ({
  view1: {
    backgroundColor: "#ffffff",
      flex: 1,
  },
   backIcon: {
       marginTop: 10,

   },
  textTitle: {
      marginTop: 17,
      marginHorizontal: 15,
      fontSize: 26,
      color: '#2E3B55',
      fontWeight: '600',
  }, 
  textContent: {
    marginTop: 30,
    fontSize: 18,
    marginHorizontal: 20,
    
  }
})
   


export default AboutUsScreen