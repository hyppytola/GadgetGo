import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLOURS} from '../../screens/database/Database'
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({data}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigation.push('ProductDetails', {productID: data._id})}
    style={styles.cardTouchableOpacity}>
    <View
      style={styles.cardView}>
      <Image
        source={{ uri: data.images.url }}
        style={styles.cardImage}
      />
    </View>
    <Text
      style={styles.cardText}>
      {data.title}
    </Text>
    <Text> {data.price}$</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardTouchableOpacity: {
      width: '30%',
      marginVertical: 14,
      marginHorizontal: 6
    },
    cardView: {
      width: '98%',
      height: 110,
      borderRadius: 10,
      backgroundColor: '#F0F0F3',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    },
    cardText: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2,
    },


  })


export default ProductItem