import React from 'react'
import { useGetAllProductQuery } from '../../services/products'

function Products(){
   var{data,isLoading}= useGetAllProductQuery
    return(
        <div className='mybox'>
           <h1>Products</h1>
           {
            isLoading &&<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Floading-satisfies--523895369144053655%2F&psig=AOvVaw2XF-4VAfEzYY8oBV67-4J1&ust=1696931096271000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDe8o7X6IEDFQAAAAAdAAAAABAJ"></img>
           }
           {
             data && data.map((Products)=>{
                return<li>{product.title}</li>
             })
           }

            </div>
    )
}
export default Products