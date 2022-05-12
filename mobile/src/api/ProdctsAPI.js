import React,{ useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import {backend} from '../../config/config.json'

function ProdctsAPI()  {

    const [prodcuts, setProducts] = useState([])
    const getProducts = async () => {
        const res = await axios.get(`http://${backend.host}:${backend.port}/api/products`)
        console.log(res.data.products)
        setProducts(res.data.products)
    }
    // const getProducts = () => {
    // axios.get(`http://${backend.host}:${backend.port}/api/products`)
    //   .then((res) => {
    //     console.log("GET this Response")
    //     console.log(res.data.products)
    //     setProducts(res.data.prodcuts)
    //   })
    //   .catch(function (error) {
    //     console.log("Error while fetching products: " + error.message);
    //   });
    // }


    useEffect(() => {
        getProducts()
    }, [])

  return {
      prodcuts: [prodcuts, setProducts]
  }
} 

export default ProdctsAPI