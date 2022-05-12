import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {backend} from '../../config/config.json'

const UserAPI = (token) => {
    const [isLogged, setIsLogged] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        if(token) {
            const getUser = async () => {
                try{
                    const res = await axios.get(`http://${backend.host}:${backend.port}/user/infor`, {
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                    setCart(res.data.cart)

                } catch(err) {
                    console.warn(err)
                }
            }

            getUser()
        }

    }, [token])

    const addCart = async (product) => {
        const check = cart.every(item => {
            return item._id !== product._id
        })

        if(check) {
            setCart([...cart, {...product, quantity: 1}])
           try {
            await axios.patch(
                `http://${backend.host}:${backend.port}/user/addcart`,
                {cart: [...cart, {...product, quantity: 1}]}, {
                    headers: {Authorization: token}
                })
           } catch (err) {
               console.log('Error')
               console.log(err)
           }
        } else {
            console.warn("This product has been added to cart")
        }
    }

  return {
     isLogged: [isLogged, setIsLogged],
     cart: [cart, setCart],
     addCart: addCart
  }
}

export default UserAPI