import React from 'react'

import Product from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'



const route = [
       {
        path:"/product",
        element:<Product/>
    },
       {
        path:"/product/:slug",
        element:<ProductDetails/>
    },
]

export default route