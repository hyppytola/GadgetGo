import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    ToastAndroid,
    ActivityIndicator
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../GlobalState';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductDetails = ({ route, navigation }) => {
    const { productID } = route.params;
    const state = useContext(GlobalState)
    const [prodcuts] = state.ProdctsAPI.prodcuts
    const addCart = state.userAPI.addCart
    const [cart] = state.userAPI.cart
    const [detailProduct, setDetailProduct] = useState([])
    const width = Dimensions.get('window').width;


    useEffect(() => {
        if (productID) {
            prodcuts.forEach(product => {
                if (product._id == productID) setDetailProduct(product)
            })

        }

    }, [productID, prodcuts])






    if (detailProduct.length === 0) return <ActivityIndicator />

   

    return (

        <View
        style={styles.root}>
        <StatusBar
            backgroundColor={'#F0F0F3'}
            barStyle="dark-content"
        />
        <ScrollView>
            <View style={styles.subRoot} >
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 16,
                        paddingLeft: 16,
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                        <Entypo
                            name="chevron-left"
                            style={{
                                fontSize: 18,
                                color: '#777777',
                                padding: 12,
                                backgroundColor: '#ffffff',
                                borderRadius: 10,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <MaterialCommunityIcons
                            name="cart"
                            style={{
                                fontSize: 18,
                                color: '#777777',
                                padding: 12,
                                marginRight: 13,
                                backgroundColor: '#ffffff',
                                borderRadius: 10,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.View1} >
                    <View style = {{
                        width: width - 20,
                        height: 230,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={{ uri: detailProduct.images.url }}
                            style={styles.productImage} />
                    </View>

                </View>

            </View>

            <View
                style={{
                    paddingHorizontal: 16 ,
                    marginTop: 3,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 14,
                    }}>
                    <Entypo
                        name="shopping-cart"
                        style={{
                            fontSize: 18,
                            color: '#0043F9',
                            marginRight: 6,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#000000',
                        }}>
                        Shopping
                    </Text>
                </View>
                <View style = {styles.titleView}>
                
                    <Text style={styles.titleText}>{detailProduct.title}</Text>
                    
                    <Text style={styles.titlePrice}>{detailProduct.price}$</Text>

                </View>

                {/* <Text>Description</Text>
                <Text style={styles.textContent}>{detailProduct.description}</Text> */}

                <Text style ={styles.textContent}>{detailProduct.content}</Text>
                <Text style={styles.textContent}>Sold: {detailProduct.sold}</Text>
                
            </View>
        </ScrollView>

        <View
            style={{
                position: 'absolute',
                bottom: 10,
                height: '8%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                onPress={() => {addCart(detailProduct)}}
                style={{
                    width: '86%',
                    height: '90%',
                    backgroundColor: '#0043F9',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '500',
                        letterSpacing: 1,
                        color: '#ffffff',
                        textTransform: 'uppercase',
                    }}>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({

    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    subRoot: {
        width: '100%',
        backgroundColor: '#F0F0F3',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    View1: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 32,
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    backButton: {
        fontSize: 18,
        color: '#777777',
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    titleText: {
        fontSize: 24,
        color: '#000',
        fontWeight: "500",

    }, 
    titlePrice: {
        color: '#000',
        fontSize: 18,
        fontWeight: '300'
    }, 
    textTitleContent: {
        marginTop: 10,
        fontSize: 18,
        color: '#000000'
    },
    textContent: {
        margin: 10,
        fontSize: 18,
        color: '#000000'
    }


})

export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
};



export default ProductDetails