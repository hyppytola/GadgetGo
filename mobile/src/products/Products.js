import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import {GlobalState} from '../GlobalState'
import ProductItem from '../components/ProductItem/ProductItem'

const Products = () => {
    const state = useContext(GlobalState)
    const [prodcuts] = state.ProdctsAPI.prodcuts
    console.log(state.ProdctsAPI.prodcuts)
    console.log(state)
  return (
    <View style = {{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start' ,
    
        margin: 7, 
    
    }}>
      {
          prodcuts.map(product =>{
              return <ProductItem data={product} key={product._id}/>
          })
      }
    </View>
  )
}

export default Products